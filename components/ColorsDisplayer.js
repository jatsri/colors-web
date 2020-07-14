import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import removeColorService from '../service/removeColor';
import receiveColorsService from '../service/fetchColors';

class ColorsDisplayer extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleRemove = this.handleRemove.bind(this)
    }

     handleRemove(id) {
        const colorToRemove = this.props.colors.find((color) => color.id === id);

        this.props.removeColorService(colorToRemove.id).then(() => {
            this.props.receiveColorsService();
        })
     }

    render() {
        return (
            <React.Fragment>
                {this.props.colors.map((color) => {
                    return (
                        <div key={color.id}>
                            <div className="color_container" style={{ backgroundColor: color.hex }}>{color.name}</div>
                            <button className="remove_button" type="button" onClick={() => this.handleRemove(color.id)}>Remove Color</button>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.props.receiveColorsService();
    }
}
const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeColorService,
    receiveColorsService
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ColorsDisplayer)