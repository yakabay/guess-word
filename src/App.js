import React from 'react';
import { observer } from "mobx-react";
import store from "./guessedWordsStore";
import logo from './logo.svg';
import './App.css';

@observer
class App extends React.Component {
  handleKeyDown(e) {
    if (e.key === "Enter") {
      store.addWord(e.target.value)
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
              placeholder="Try to guess word"
              onKeyDown={this.handleKeyDown}
          />
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {store.guessedWords.map( word => (
                <div key={word.word}>
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
