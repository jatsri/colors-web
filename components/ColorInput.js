import React from 'react';

class ColorInput extends React.Component {
    constructor() {
        super();

        this.state = {
            elements: []
        }

        this.colorName = '';
        this.hexValue = '';
    }

    render() {
        return (
            <React.Fragment>
                <label>Color:</label><input type="text" id="color_name" name="color" value={this.props.color} ref={(input) => this.colorName = input}/>
                <label>Hex Value:</label><input type="text" id="hex_value" name="hex"  value={this.props.hexValue} ref={(input) => this.hexValue = input}/>
                <button type="button" onClick={(e) => this.props.onAdd({ colorName: this.colorName.value, hexValue: this.hexValue.value })}>Add</button><br/>
            </React.Fragment>
        )
    }
}

export default ColorInput;
