import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GuessInput = ({onPressEnter}) => {

    const [value, setValue] = useState("");

    const handleChange = event => {
        const value = event.target.value;
        const wordHasMoreThanFiveCharacters = value.length > 5;
        if (wordHasMoreThanFiveCharacters) {
            return;
        }
        setValue(value);
    };

    const handleKeyDown = event => {
        const value = event.target.value;
        const spaceIsEntered = event.keyCode === 32;
        const wordHasFiveCharacters = value.length === 5;

        if (spaceIsEntered ) {
            event.preventDefault();
        }

        if (event.key === "Enter" && wordHasFiveCharacters) {
            onPressEnter(value)
            setValue("");
        }
    };

    return (
        <input
            placeholder="Try to guess word"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
}

GuessInput.propTypes = {
    onPressEnter: PropTypes.func.isRequired,
};

export default GuessInput;
