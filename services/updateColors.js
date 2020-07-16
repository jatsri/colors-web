import getFetch from '../lib/getFetch';
import fetchColors from './getColors';

import validationError from '../action/actionCreator/validationError';

export default () => {
    const fetch = getFetch();
    return (dispatch, getState) => {
        const colors = getState().addedColors;

        if(!colors.length) {
            return dispatch(validationError);
        }

        const invalidColors = [];
        colors.forEach((item) => {
            console.log('Item from serivce', item);
            const hexPattern = RegExp('^#([0-9A-F]{3}){1,2}$');
            if(!item.color || !item.hex || !hexPattern.test(item.hex)) {
                invalidColors.push(item);
            }
        });

        if(invalidColors.length) {
            return dispatch(validationError);
        }

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
