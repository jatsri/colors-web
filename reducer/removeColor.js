export  default ( state = {}, action) => {
    switch (action.type) {
        case 'REMOVE_COLORS':
            return action.data
        default:
            return state
    }
}
