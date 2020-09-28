import * as Constant from './Constant';

export const addWeather = (data) => {
    return {
        type: Constant.ADD_WEATHER_REPORT,
        data: data
    }
}

export const removeWeather = () => {
    return {
        type: Constant.REMOVE_WEATHER_REPORT
    }
}
export const setErrorMessage = (data) => {
    return {
        type: Constant.SET_ERROR_MESSAGE,
        data: data
    }
}
export const removeErrorMessage = () => {
    return {
        type: Constant.REMOVE_ERROR_MESSAGE
    }
}