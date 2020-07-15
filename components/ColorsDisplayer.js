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
         console.log('id', id);
        // const colorToRemove = this.props.colors.find((color) => color.id === id);

        this.props.removeColorService(id).then(() => {
            this.props.receiveColorsService();
        })
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
            </div>
        )
    }

    componentDidMount() {
        this.props.receiveColorsService();
    }
}
const mapStateToProps = state => {
    return {
        colors: state.receivedColors
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeColorService,
    receiveColorsService
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ColorsDisplayer)
