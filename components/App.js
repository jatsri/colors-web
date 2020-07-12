import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (<div>{this.props.text}</div>)
    }

}

const mapStateToProps = state => {
    return {
        text: 'Hello World'
    }
}

export default connect(
    mapStateToProps
)(App);
