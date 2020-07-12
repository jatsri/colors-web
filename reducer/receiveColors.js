export  default ( state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_COLORS':
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}
