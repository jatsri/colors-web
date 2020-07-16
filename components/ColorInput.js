import React from 'react';

class ColorInput extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            showAddButton: true,
            showRemoveButton: false,
            invalidColorNameEntry: false,
            invalidHexValueEntry: false,
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
        if(!this.colorInput.value) {
             return this.setState({
                invalidColorNameEntry: true
            });
        }

        if(!this.hexInput.value) {
             return this.setState({
                invalidHexValueEntry: true
            });
        }

        const hexPattern = RegExp('^#([0-9A-F]{3}){1,2}$');

        if(!hexPattern.test(this.hexInput.value)) {
            alert('Please enter a valid hex value');
            return this.setState({
                invalidHexValueEntry: true
            });
        }

        if(this.colorInput.value && this.hexInput.value) {
            this.props.onInputBlur({ index: this.props.index, color: this.colorInput.value, hex: this.hexInput.value })

            this.setState({
                colorInputValue: this.colorInput.value,
                hexInputValue: this.hexInput.value,
                invalidColorNameEntry: false,
                invalidHexValueEntry: false
            })
        }
    }

    render() {
        const invalidColorNameClassName = this.state.invalidColorNameEntry ? 'invalid_input' : ''
        const invalidHexValueClassName = this.state.invalidHexValueEntry ? 'invalid_input' : ''
        return (
            <React.Fragment>
                <input type="text" id="color_name" name="color" placeholder="Color name" className={invalidColorNameClassName} ref={(input) => this.colorInput = input} onBlur={this.handleInputBlur.bind(this)}/>
                <input type="text" id="hex_value" name="hex" placeholder="Hex value" className={invalidHexValueClassName} ref={(input) => this.hexInput = input} onBlur={this.handleInputBlur.bind(this)}/>
                {(this.state.colorInputValue || this.state.hexInputValue )&& <button className="remove_button" type="button" onClick={this.handleButtonClick.bind(this)}>Remove</button>}
                <br/>
            </React.Fragment>
        )
    }
}

export default ColorInput;
