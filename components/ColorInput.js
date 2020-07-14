import React from 'react';

class ColorInput extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            showAddButton: true,
            showRemoveButton: false
        }

        this.colorInput = null;
        this.hexInput = null;
    }

    resetValues() {
        this.colorInput.value = '';
        this.hexInput.value = '';
    }

    handleButtonClick() {
        this.setState(({ showAddButton, showRemoveButton }) => {
            if(showAddButton) {
                this.props.onAdd({ colorName: this.colorInput.value, hexValue: this.hexInput.value })
            } else {
                this.props.onRemove({ colorName: this.colorInput.value, hexValue: this.hexInput.value })
                this.resetValues();
            }

            return {
                showAddButton: !showAddButton,
                showRemoveButton: !showRemoveButton
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <label>Color:</label><input type="text" id="color_name" name="color" ref={(input) => this.colorInput = input}/>
                <label>Hex Value:</label><input type="text" id="hex_value" name="hex" ref={(input) => this.hexInput = input}/>
                {this.state.showAddButton && <button type="button" onClick={this.handleButtonClick.bind(this)}>Add</button>}
                {this.state.showRemoveButton && <button type="button" onClick={this.handleButtonClick.bind(this)}>Remove</button>}
                <br/>
            </React.Fragment>
        )
    }
}

export default ColorInput;
