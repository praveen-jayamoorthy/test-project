import React from 'react'
import {connect} from 'react-redux';
import './styles.css'

const WeatherReport = (props) => {

    const {weatherReport, errorReport} = props;


    if (weatherReport) {
        const {
            city,
            country,
            date,
            description,
            main,
            temp,
            sunset,
            sunrise,
            humidity,
            wind,
            highestTemp,
            lowestTemp,
            forecast,
        } = weatherReport;
        return (
            <div>
                <WeatherLocation city={city} date={date} country={country}/>
                <div className='weather-details'>
                    <div>
                        <WeatherIcon type={main}/>
                    </div>
                    <Temprature temp={temp} description={description}/>
                    <div className='weather-detail-wrapper'>
                        <WeatherDetail name='Hight' value={Math.floor(highestTemp)}/>
                        <WeatherDetail name='Wind' value={wind + 'mph'}/>
                        <WeatherDetail name='Sunrise' value={sunrise}/>
                        <WeatherDetail name='Low' value={Math.floor(lowestTemp)}/>
                        <WeatherDetail name='Rain' value={humidity + '%'}/>
                        <WeatherDetail name='Sunset' value={sunset}/>
                    </div>
                </div>
                <div style={{fontSize: '20px'}}>Forecast</div>
                <div className='forecast-details'>
                    <Forecast forecast={forecast}/>
                </div>
            </div>)
    } else if (errorReport) {
        return <NotFount error={errorReport}/>
    }
    return (
        <div style={{padding: '10px'}}>
            please search city
        </div>
    )
}


const WeatherLocation = ({city, country, date}) => {
    return (
        <div>
            <h2>
                {city}, {country}
            </h2>
            <h4>{date}</h4>
        </div>
    )
}

const Temprature = ({temp, description}) => {
    return (
        <div>
            <div style={{fontSize: '50px'}}>{Math.floor(temp)}&#176;</div>
            <div>
                {description}
            </div>
        </div>
    )
}
const WeatherDetail = ({name, value}) => {
    return (
        <div className='detail-child'>
            <div className='small-label'>
                {value}
            </div>
            <div className='text'>{name}</div>
        </div>
    )
}

const NotFount = ({error}) => {
    return (
        <div className='not-found'>
            {error}
        </div>
    )
}

const WeatherIcon = ({type}) => {
    switch (type) {
        case  'Thunderstorm':
            return <i className="fas fa-bolt weather-icon weather-icon"/>
        case  'Drizzle':
            return <i className="fas fa-cloud-rain weather-icon"/>
        case  'Rain':
            return <i className="fas fa-cloud-showers-heavy weather-icon"/>
        case  'Snow':
            return <i className="fas fa-snow-flake weather-icon"/>
        case  'Clear':
            return <i className="fas fa-sun weather-icon"/>
        case  'Clouds':
            return <i className="fas fa-cloud weather-icon"/>
        default:
            return <i className="fas fa-smog weather-icon"/>
    }
}

const Forecast = ({forecast}) => {

    return (
        forecast.map((item) => {
                return (
                    <div className='forecast-detail' key={item.dt}>
                        <div>
                            {item.dt_txt.slice(5, 7)}.{item.dt_txt.slice(8, 10)}
                        </div>
                        <div>{item.dt_txt.slice(11, 13) * 1}:00</div>
                        <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt=''/>
                        <div>
                            {Math.floor(item.main.temp * 1) / 1}&#176;
                        </div>
                    </div>
                )
            }
        ))

}

const mapStateToProps = (state) => {
    return {
        weatherReport: state.whetherReducer.weatherReport,
        errorReport: state.whetherReducer.errorMessage
    }
}

export default connect(mapStateToProps, null)(WeatherReport);
