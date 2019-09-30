import {observable} from "mobx";

class GuessedWordsStore {
    secretWord = "party";
    secretWordArray = this.secretWord.split("");

    @observable guessedWords = [];

    numberOfMatchedLetters(word) {

    }

    addWord(word) {
        const wordArray = word.split("");

        this.guessedWords.push({
            word,
            matchedLetters: this.numberOfMatchedLetters(word),
        })
    }
}

const guessedWordsStore = new GuessedWordsStore();

export default guessedWordsStore;