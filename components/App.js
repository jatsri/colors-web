import React from 'react';

import ColorsForm from './ColorsForm';
import ColorsDisplayer from './ColorsDisplayer';

class App extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (<React.Fragment>
            <header>
                <div>Colors Admin</div>
            </header>
            <ColorsDisplayer/>
            <ColorsForm />
        </React.Fragment>)
    }
}

export default App;
