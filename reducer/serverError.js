export  default ( state = { getColors: false, postColors: false, deleteColor: false }, action) => {
    switch (action.type) {
        case 'SERVER_ERROR_GET':
            return { state, getColors: true }
        case 'SERVER_ERROR_POST':
            return { state, postColors: true }
        case 'SERVER_ERROR_DELETE':
            return { state, deleteColor: true }
        default:
            return state
    }
}
