import React from 'react';

class ColorInput extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            showAddButton: true,
            showRemoveButton: false,
            colorInputValue: '',
            hexInput: ''
        }
    }

    resetValues() {
        this.colorInput.value = '';
        this.hexInput.value = '';
    }

    handleButtonClick() {
        this.props.onRemove({ colorName: this.colorInput.value, hexValue: this.hexInput.value })
        this.resetValues();
    }

    handleInputBlur() {
        this.props.onInputBlur({ index: this.props.index, color: this.colorInput.value, hex: this.hexInput.value })
        this.setState({
            colorInputValue: this.colorInput.value,
            hexInputValue: this.hexInput.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" id="color_name" name="color" placeholder="Color name" ref={(input) => this.colorInput = input} onBlur={this.handleInputBlur.bind(this)}/>
                <input type="text" id="hex_value" name="hex" placeholder="Hex value" ref={(input) => this.hexInput = input} onBlur={this.handleInputBlur.bind(this)}/>
                {(this.state.colorInputValue || this.state.hexInputValue )&& <button className="remove_button" type="button" onClick={this.handleButtonClick.bind(this)}>Remove</button>}
                <br/>
            </React.Fragment>
        )
    }
}

export default ColorInput;
