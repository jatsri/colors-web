export  default ( state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_COLORS':
            return action.data
        default:
            return state
    }
}
