export  default ( state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_COLORS':
            return [
                ...state,
                ...action.data
            ]
        case 'REMOVE_COLOR':
            return state.filter((item) => item.id !== action.data.id)
        default:
            return state
    }
}
