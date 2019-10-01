import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GuessInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    handleChange = event => {
        const value = event.target.value;
        const wordHasLessThanSixCharacters = value.length < 6;

        if (wordHasLessThanSixCharacters) {
            this.setState({value})
        }
    };

    handleKeyDown = event => {
        const { onPressEnter } = this.props;
        const spaceIsEntered = event.keyCode === 32;

        if (spaceIsEntered) {
            event.preventDefault();
        }

        if (event.key === "Enter") {
            onPressEnter(event.target.value)
            this.setState({ value: "" })
        }
    };

    render() {
        const { value } = this.state;

        return (
            <input
                placeholder="Try to guess word"
                value={value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}

GuessInput.propTypes = {
    onPressEnter: PropTypes.func.isRequired,
};

export default GuessInput;
