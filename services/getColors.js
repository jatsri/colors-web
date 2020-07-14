import getFetch from '../lib/getFetch';
import receiveColors from '../action/actionCreator/receiveColors';

export default () => {
    const fetch = getFetch();
    return dispatch => {
            return fetch('http://localhost:3000/colors')
            .then(res => res.json())
            .then(data => {
                dispatch(receiveColors(data.items))
            });
    }
}
