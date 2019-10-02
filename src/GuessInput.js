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
        const wordHasMoreThanFiveCharacters = value.length > 5;
        if (wordHasMoreThanFiveCharacters) {
            return;
        }
        this.setState({value})
    };

    handleKeyDown = event => {
        const { onPressEnter } = this.props;
        const value = event.target.value;
        const spaceIsEntered = event.keyCode === 32;
        const wordHasFiveCharacters = value.length === 5;

        if (spaceIsEntered ) {
            event.preventDefault();
        }

        if (event.key === "Enter" && wordHasFiveCharacters) {
            onPressEnter(value)
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
