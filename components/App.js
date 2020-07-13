import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import removeColor from '../action/removeColor';

class App extends React.Component {
    handleRemove(id) {
        console.log('props', this.props);
        const colorToRemove = this.props.colors.find((color) => color.id === id);

        console.log('colorToRemove', colorToRemove);

        this.props.removeColor(colorToRemove);
    }

    render() {
        return (<React.Fragment>
            {this.props.colors.map((color) => {
                return (
                    <React.Fragment>
                        <div key={color.id} className="color_container" style={{ backgroundColor: color.hex }}>{color.name}</div>
                        <button type="button" onClick={this.handleRemove.bind(this, color.id)}>Remove Color</button>
                    </React.Fragment>
                )
            })}
        </React.Fragment>)
    }

}

const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeColor
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
