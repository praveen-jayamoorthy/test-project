import React from 'react'
import {connect} from 'react-redux';
import './styles.css'

const WeatherHistoryReport = ({weatherHistoryReport, searchWeather}) => {
    return (
        <div className='weather-history-wrap'>
            <div>
                Weather History
            </div>
            <div>
                {
                    weatherHistoryReport.map((data, index) => {
                        return (
                            <div className='weather-history' key={index} onClick={() => {
                                searchWeather(data.city, true)
                            }}>
                                <div>
                                    <div>
                                        {data.city}, {data.country}
                                    </div>
                                    <div style={{fontSize: '12px'}}>{data.date}</div>
                                </div>
                                <div>
                                    <div>{Math.floor(data.temp)}&#176; {data.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        weatherHistoryReport: state.whetherHistoryReducer.weatherHistoryReport
    }
}
export default connect(mapStateToProps, null)(WeatherHistoryReport);