import { observable } from "mobx";

class GuessedWordsStore {
    secretWord = "party";

    @observable guessedWords = [
        {
            value: "match",
            matchedLetters: this.numberOfMatchedLetters("match"),
        },
        {
            value: "bingo",
            matchedLetters: this.numberOfMatchedLetters("bingo"),
        },
        {
            value: "snake",
            matchedLetters: this.numberOfMatchedLetters("snake"),
        },
    ];

    numberOfMatchedLetters(word) {
        const letters = word.split("");
        const uniqueLetters = Array.from(new Set(letters));

        return uniqueLetters.reduce((result, letter) => {
            if (this.secretWord.includes(letter)) {
                return result + 1;
            } else {
                return result;
            }
        }, 0);
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