import getFetch from '../lib/getFetch';
import fetchColors from './fetchColors';

export default () => {
    const fetch = getFetch();
    return (dispatch, getState) => {
        console.log('getState', JSON.stringify({ items: getState().addedColors }));
       return fetch('http://localhost:3000/colors', {
           method: 'POST',
           body: JSON.stringify({ items: getState().addedColors}),
           headers: {
               'Content-Type': 'application/json'
           }
       })
            .then(() => {
                dispatch(fetchColors());
            })
    }
}
