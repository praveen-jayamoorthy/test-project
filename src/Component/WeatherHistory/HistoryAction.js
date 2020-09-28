import * as Constant from './Constants';

export const addWeatherHistory = (data) => {
    return {
        type: Constant.ADD_WEATHER_HISTORY,
        data: data
    }
}