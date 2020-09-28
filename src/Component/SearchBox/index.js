import React, {useState} from 'react'
import './styles.css'
import searchIcon from './../../assets/search.png'
import closeButton from './../../assets/close_button.jpg'

const SearchComponent = ({searchWeather, clearHandler}) => {
    const [cityName, setCityName] = useState('');

    const onInputChangeHandler = (e) => {
        setCityName(e.target.value)
    }
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter')
            searchWeather(cityName)
    }
    const clearData = () => {
        setCityName('')
        clearHandler();
    }

    return (
        <>
            <div className="search">
                <input type="text" className="searchTerm" value={cityName}
                       onChange={onInputChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       placeholder="search city"/>
                <button className="searchButton" onClick={() => searchWeather(cityName)}>
                    <img src={searchIcon} alt='' className='search-icon'/>
                </button>
                <button className="searchButton" onClick={clearData}>
                    <img src={closeButton} alt='' className='search-icon'/>
                </button>
            </div>
        </>
    )
}

export default SearchComponent;