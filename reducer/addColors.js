export  default ( state = [], action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            const isIndexAdded = state.find((item) => item.index === action.data.index)
            if(isIndexAdded) {
                const index = state
                    .map(({ index }) => index)
                    .indexOf(action.data.index)
                state[index] = action.data
                return state;
            }
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
