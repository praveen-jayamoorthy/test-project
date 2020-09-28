import * as Constants from './Constants';

const initialState = {
    weatherHistoryReport: [],
};
const whetherReducer = (state = initialState, action) => {

    switch (action.type) {
        case Constants.ADD_WEATHER_HISTORY:
            return {
                ...state,
                weatherHistoryReport: [...state.weatherHistoryReport, action.data]
            };
        default:
            return state
    }
}
export default whetherReducer;

