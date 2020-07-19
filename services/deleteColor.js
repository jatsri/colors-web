import getFetch from '../lib/getFetch';
import serverError from '../action/actionCreator/serverError';
import getColors from './getColors';
import { SERVER_ERROR_DELETE } from '../action/actionTypes';

export default (id) => {
    const fetch = getFetch();
    return dispatch => {
        return fetch(`http://localhost:3000/colors/${id}`, { method: 'DELETE' })
            .then(() => {
                console.log('From the success cb');
                return dispatch(getColors())
            })
            .catch((err) => {
                console.log('Some unexpected error from the server', err);
                return dispatch(serverError('SERVER_ERROR_DELETE'))
            })
    }
}
