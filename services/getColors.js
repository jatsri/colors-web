import getFetch from '../lib/getFetch';
import receiveColors from '../action/actionCreator/receiveColors';
import serverError from '../action/actionCreator/serverError';
import { SERVER_ERROR_GET } from '../action/actionTypes';

export default () => {
    const fetch = getFetch();
    return dispatch => {
            return fetch('http://localhost:3000/colors')
            .then(res => res.json())
            .then(data => {
                dispatch(receiveColors(data.items))
            })
            .catch((err) => {
                console.log('Error while fetching colors', err);
                dispatch(serverError('SERVER_ERROR_GET'));
            })
    }
}
