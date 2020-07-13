import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (<React.Fragment>
            {this.props.colors.map((color) => {
                return (<div key={color.id} className="color_container" style={{ backgroundColor: color.hex }}>{color.name}</div>)
            })}
        </React.Fragment>)
    }

}

const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}

export default connect(
    mapStateToProps
)(App);
