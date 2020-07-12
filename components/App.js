import React from 'react';
import { connect } from 'react-redux';
import fetchColors from '../service/fetchColors';

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

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
