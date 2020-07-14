import React from 'react';

import ColorInputList from './ColorInputList';
import ColorsDisplayer from './ColorsDisplayer';

class App extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (<React.Fragment>
            <ColorsDisplayer/>
            <ColorInputList />
        </React.Fragment>)
    }
}

export default App;
