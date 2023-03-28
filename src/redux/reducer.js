const initialState = {
    count: 0,
}

export function reducer (state = initialState, action) {

    console.log(action);

    if (action.type === 'INCR_STATE') {
        return {...state, count: action.payload}
    } else if (action.type === 'DECR_STATE') {
        return {...state, count: action.payload}
    } else if (action.type === 'RESET_STATE') {
        return {...state, count: 0}
    }

    return state
}