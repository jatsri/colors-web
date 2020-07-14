import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


import ColorInput from './ColorInput';
import removeColor from '../action/removeColor';
import addColors from '../action/addColors';
import addColorsService from '../service/addColors';

class ColorInputList extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            colorInputs: 1
        }

        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleRemoveButton = this.handleRemoveButton.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            colorInputs: 1
        })

        this.props.addColorsService().then(() => {
            this.props.addColors([]);
            window.location.reload();
        })
    }

    handleAddButton(enteredColor) {
        this.props.addColors({
            color: enteredColor.colorName,
            hex: enteredColor.hexValue
        })

        this.setState({
            colorInputs: ++this.state.colorInputs

        })
    }

    handleRemoveButton(removedColor) {
        this.props.removeColor({
            color: removedColor.colorName,
            hex: removedColor.hexValue
        })

        this.setState((currentState) => {
            return {
                colorInputs: --this.state.colorInputs
            }

        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <legend>
                        Add Colors
                    </legend>
                    {
                        Array.from({
                            length: this.state.colorInputs
                        }).map((item, index) =>
                            <ColorInput key={index} isSubmitted={this.state.isSubmitted} onAdd={this.handleAddButton} onRemove={this.handleRemoveButton}/>,
                        )
                    }
                    <button type="submit">Save Colors</button>
                </fieldset>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    removeColor,
    addColors,
    addColorsService
}, dispatch)

export default connect(null, mapDispatchToProps)(ColorInputList)
