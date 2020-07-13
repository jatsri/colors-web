import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (<div className="color_container">{this.props.text}</div>)
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
