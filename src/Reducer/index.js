import React from "react"
import { combineReducers } from 'redux';
import whetherReducer from "../Component/WeatherReport/WhetherReducer";

export default combineReducers({
    whetherReducer,
})
