import React from 'react';
import SearchBox from './Component/SearchBox'
import WeatherReport from './Component/WeatherReport'
import {connect} from 'react-redux'
import {addWeather, removeWeather, setErrorMessage} from './Component/WeatherReport/WeatherAction'
import {addWeatherHistory} from './Component/WeatherHistory/HistoryAction'
import {bindActionCreators} from 'redux'
import WeatherHistoryReport from "./Component/WeatherHistory";

const App = (props) => {
    const APIKey = process.env.REACT_APP_API_KEY;
    const {addWeather: addWeatherReport, removeWeather: removeWeatherReport, setErrorMessage: setErrorReport, addWeatherHistory: addHistoryReport} = props;
    const searchWeather = (searchValue, isHistory=false) => {
        console.log(searchValue)

        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${APIKey}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${APIKey}&units=metric`;

        Promise.all([fetch(weather), fetch(forecast)])
            .then(([res1, res2]) => {
                if (res1.ok && res2.ok) {
                    return Promise.all([res1.json(), res2.json()]);
                }
                throw Error(res1.statusText, res2.statusText);
            })
            .then(([data1, data2]) => {
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'Nocvember',
                    'December',
                ];
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const currentDate = new Date();
                const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
                    months[currentDate.getMonth()]
                }`;
                const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
                const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

                const weatherInfo = {
                    city: data1.name,
                    country: data1.sys.country,
                    date,
                    description: data1.weather[0].description,
                    main: data1.weather[0].main,
                    temp: data1.main.temp,
                    highestTemp: data1.main.temp_max,
                    lowestTemp: data1.main.temp_min,
                    sunrise,
                    sunset,
                    clouds: data1.clouds.all,
                    humidity: data1.main.humidity,
                    wind: data1.wind.speed,
                    forecast: data2.list,
                };
                addWeatherReport(weatherInfo)
                if(!isHistory)
                    addHistoryReport(weatherInfo)
            })
            .catch(error => {
                setErrorReport(error.message)
            });


    }

    const clearHandler = () => {
        removeWeatherReport();
    }

    return (
        <div className='main-component'>
            <div className="wrap">
                <SearchBox searchWeather={searchWeather} clearHandler={clearHandler}/>
                <WeatherReport/>
            </div>
            <WeatherHistoryReport searchWeather={searchWeather}/>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addWeather, removeWeather, setErrorMessage, addWeatherHistory}, dispatch)
}


export default connect(null, mapDispatchToProps)(App);