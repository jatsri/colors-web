import fetch from 'cross-fetch';

export default () => {
    const isOnServer = typeof document !== 'object';
    console.log('isOnServer', isOnServer);

    if(isOnServer) {
        console.log('From getFetch');
        return fetch;
    }

    require('cross-fetch/polyfill');
    return window.fetch;
}
