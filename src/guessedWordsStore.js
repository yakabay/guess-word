import { observable, autorun } from "mobx";

class GuessedWordsStore {
    secretWord = "party";

    @observable guessedWords = [
        {
            word: "match",
            matchedLetters: this.numberOfMatchedLetters("match"),
        },
        {
            word: "desert",
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

    addWord(word) {
        this.guessedWords.push({
            word,
            matchedLetters: this.numberOfMatchedLetters(word),
        })
    }
}

const guessedWordsStore = new GuessedWordsStore();

export default guessedWordsStore;