import { observable } from "mobx";

class GuessedWordsStore {
    secretWord = "party";

    @observable guessedWords = [
        {
            value: "match",
            matchedLetters: this.numberOfMatchedLetters("match"),
        },
        {
            value: "desert",
            matchedLetters: this.numberOfMatchedLetters("desert"),
        },
    ];

    numberOfMatchedLetters(word) {
        let result = 0;
        const letters = word.split("");
        letters.forEach( letter => {
            if (this.secretWord.includes(letter)) {
                result++;
            }
        });
        return result;
    }

    addWord(value) {
        this.guessedWords.push({
            value,
            matchedLetters: this.numberOfMatchedLetters(value),
        })
    }
}

const guessedWordsStore = new GuessedWordsStore();

export default guessedWordsStore;