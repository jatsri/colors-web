import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import removeColor from '../action/removeColor';
import removeColorService from '../service/removeColor';
import receiveColorsService from '../service/fetchColors'
import addColorsService from '../service/addColors';
import addColors from '../action/addColors';
import ColorInput from './ColorInput';

class App extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            colorInputs: 1
        }
    }

    handleRemove(id) {
        const colorToRemove = this.props.colors.find((color) => color.id === id);

        this.props.removeColorService(colorToRemove.id).then(() => {
            this.props.receiveColorsService();
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addColorsService();
        this.setState({
            colorInputs: 1
        })
        this.props.addColors([]);
        window.location.reload();
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
        return (<React.Fragment>
            {this.props.colors.map((color) => {
                return (
                    <React.Fragment>
                        <div key={color.id} className="color_container" style={{ backgroundColor: color.hex }}>{color.name}</div>
                        <button className="remove_button" type="button" onClick={this.handleRemove.bind(this, color.id)}>Remove Color</button>
                    </React.Fragment>
                )
            })}
            <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <legend>
                        Add Colors
                    </legend>
                    {
                        Array.from({length: this.state.colorInputs}).fill(<ColorInput isSubmitted={this.state.isSubmitted} onAdd={this.handleAddButton.bind(this)} onRemove={this.handleRemoveButton.bind(this)}/>, 0, this.state.colorInputs)
                    }
                    <button type="submit">Save Colors</button>
                </fieldset>
            </form>
        </React.Fragment>)
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
    removeColor,
    addColors,
    removeColorService,
    receiveColorsService,
    addColorsService
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
