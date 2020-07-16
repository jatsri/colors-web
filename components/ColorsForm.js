import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import ColorInput from './ColorInput';
import removeColor from '../action/actionCreator/removeColor';
import addColors from '../action/actionCreator/addColors';
import addColorsService from '../services/updateColors';

class ColorsForm extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            colorInputs: 1
        }

        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
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

    handleInputBlur(enteredColor) {
        this.props.addColors(enteredColor)
    }

    handleRemoveButtonClick(removedColor) {
        this.props.removeColor({
            color: removedColor.colorName,
            hex: removedColor.hexValue
        })

        this.setState( {
            colorInputs: this.state.colorInputs === 1 ? this.state.colorInputs : --this.state.colorInputs
        })
    }

    handleAddButtonClick() {
        const lastEntry =this.props.colors.slice(-1, 1);
        const hexPattern = RegExp('^#([0-9A-F]{3}){1,2}$');

        if(!lastEntry.color || !lastEntry.hex || !hexPattern.test(lastEntry.hex)) {
            return alert('Please complete the open entry');
        }

        this.setState({
            colorInputs: ++this.state.colorInputs
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
                            <ColorInput key={index} index={index} totalInputs={this.state.colorInputs} isSubmitted={this.state.isSubmitted} onInputBlur={this.handleInputBlur} onRemove={this.handleRemoveButtonClick}/>,
                        )
                    }
                    <button className="add_button" type="button" onClick={this.handleAddButtonClick.bind(this)}>Add Colors</button>
                    <button className="save_button" type="submit">Save Colors</button>
                </fieldset>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    colors: state.addedColors
});

const mapDispatchToProps = dispatch => bindActionCreators({
    removeColor,
    addColors,
    addColorsService
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ColorsForm)
