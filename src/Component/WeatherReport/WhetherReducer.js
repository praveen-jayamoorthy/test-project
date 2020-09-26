const initialState = {
    serviceDetails : 'staticDatas',
    timeSlotDetails : null
}

const whetherReducer = (state = initialState, action ) => {

    switch (action.type) {
        case 'UPDATE_DESIGN_AREA_LOCALE':
            return initialState;
        case 'UPDATE_DESIGN_AREA_VIEW':
            return {... state, ...{designAreaView: action.designAreaView}};
        default:
            return state
    }
}
export default whetherReducer;

