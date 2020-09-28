import { combineReducers } from 'redux';
import whetherReducer from "../Component/WeatherReport/WhetherReducer";
import whetherHistoryReducer from "../Component/WeatherHistory/HistoryReducer";

export default combineReducers({
    whetherReducer,
    whetherHistoryReducer,
})
