import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import removeColor from '../action/removeColor';
import removeColorService from '../service/removeColor';
import receiveColorsService from '../service/fetchColors'

class App extends React.Component {
    handleRemove(id) {
        const colorToRemove = this.props.colors.find((color) => color.id === id);

        this.props.removeColorService(colorToRemove.id).then(() => {
            this.props.receiveColorsService();
        })
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
    removeColor,
    removeColorService,
    receiveColorsService
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
