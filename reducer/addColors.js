export  default ( state = [], action) => {
    switch (action.type) {
        case 'ADD_COLORS':
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}
