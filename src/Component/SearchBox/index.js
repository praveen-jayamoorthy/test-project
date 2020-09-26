import React, {useState} from 'react'
import './styles.css'

const SearchComponent = ({searchWeather}) => {
    const [cityName, setCityName] = useState('');

    const onInputChangeHandler = (e) => {
        setCityName(e.target.value)
    }
    const onKeyDownHandler = (e) =>{
        if(e.key === 'Enter')
            searchWeather(cityName)
    }

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" value={cityName}
                           onChange={onInputChangeHandler}
                           onKeyDown={onKeyDownHandler}
                           placeholder="search city"/>
                    <button  className="searchButton" onClick={()=>searchWeather(cityName)}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchComponent;