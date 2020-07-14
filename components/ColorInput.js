import React from 'react';

class ColorInput extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            showAddButton: true,
            showRemoveButton: false
        }

        this.colorName = '';
        this.hexValue = '';
    }

    handleButtonClick() {
        this.setState(({ showAddButton, showRemoveButton }) => {
            if(showAddButton) {
                this.props.onAdd({ colorName: this.colorName.value, hexValue: this.hexValue.value })
            } else {
                this.props.onRemove({ colorName: this.colorName.value, hexValue: this.hexValue.value })
                this.colorName.value = '';
                this.hexValue.value = '';
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
                <label>Color:</label><input type="text" id="color_name" name="color" ref={(input) => this.colorName = input}/>
                <label>Hex Value:</label><input type="text" id="hex_value" name="hex" ref={(input) => this.hexValue = input}/>
                {this.state.showAddButton && <button type="button" onClick={this.handleButtonClick.bind(this)}>Add</button>}
                {this.state.showRemoveButton && <button type="button" onClick={this.handleButtonClick.bind(this)}>Remove</button>}
                <br/>
            </React.Fragment>
        )
    }
}

export default ColorInput;
