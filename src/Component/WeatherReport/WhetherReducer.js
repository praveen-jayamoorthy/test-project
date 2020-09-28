import * as Constants from './Constant';

const initialState = {
    weatherReport: null,
    errorMessage: null,
};
const whetherReducer = (state = initialState, action) => {

    switch (action.type) {
        case Constants.ADD_WEATHER_REPORT:
            return {...initialState, ...{weatherReport: action.data}};
        case Constants.REMOVE_WEATHER_REPORT:
            return initialState;
        case Constants.SET_ERROR_MESSAGE:
            return {...initialState, ...{errorMessage: action.data}};
        case Constants.REMOVE_ERROR_MESSAGE:
            return {...initialState, ...{errorMessage: null}};
        default:
            return state
    }
}
export default whetherReducer;

