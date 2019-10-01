import React from 'react';
import { observer } from "mobx-react";
import store from "./guessedWordsStore";
import logo from './logo.svg';
import './App.css';
import GuessInput from "./GuessInput";

@observer
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <GuessInput onPressEnter={(value) => store.addWord(value)} />

          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {store.guessedWords.map( (word, index) => (
                <div key={index}>
                  { word.word } : { word.matchedLetters }
                </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
