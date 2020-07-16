export  default ( state = false, action) => {
    switch (action.type) {
        case 'VALIDATION_ERROR':
            return false
        case 'VALIDATION_SUCCESS':
            console.log('From the validaiton success');
            return true
        default:
            return state
    }
}
