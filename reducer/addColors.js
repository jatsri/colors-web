export  default ( state = [], action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            return [
                ...state,
                action.data
            ];
        case 'REMOVE_COLOR':
            return state.filter((item) => item.hex.toLowerCase() !== action.data.hex.toLowerCase())
        default:
            return state
    }
}
