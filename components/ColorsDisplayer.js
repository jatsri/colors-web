import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import removeColorService from '../services/deleteColor';
import receiveColorsService from '../services/getColors';

class ColorsDisplayer extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleRemove = this.handleRemove.bind(this)
    }

     handleRemove(id) {
        this.props.removeColorService(id);
     }

    render() {
        return (
            <div className="colors-container">
                {this.props.colors.map((color) => {
                    return (
                        <div key={color.id} className="color_stick">
                            <div className="color_container" style={{ backgroundColor: color.hex }}>{color.name}</div>
                            <button className="remove_button" type="button" onClick={() => this.handleRemove(color.id)}>Remove</button>
                        </div>
                    )
                })}
                {this.props.errors.deleteColor && alert('Something went wrong. Please try again!')}
                {this.props.errors.getColors && alert('Something went wrong while fetching colors. Please refresh the page to try again!')}
            </div>
        )
    }

    componentDidMount() {
        !this.props.errors.getColors && this.props.receiveColorsService();
    }
}
const mapStateToProps = state => {
    return {
        colors: state.receivedColors,
        errors: state.errors
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeColorService,
    receiveColorsService
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ColorsDisplayer)
