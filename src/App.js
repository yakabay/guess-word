import React from 'react';
import { observer } from "mobx-react";
import store from "./guessedWordsStore";
import logo from './logo.svg';
import './App.css';
import GuessInput from "./GuessInput";
import { resizeImage } from "./utils/ImageResizer";

@observer
class App extends React.Component {
  onFileUpload = (e) => {
    const file = e.target.files[0];
    resizeImage(file, {height: 40, width: 40})
        .then(result => {
          console.log(result, "- result")
        });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/*<GuessInput onPressEnter={(value) => store.addWord(value)} />*/}
          <input type="file" onChange={this.onFileUpload}/>

          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {store.guessedWords.map( (word, index) => (
                <div key={index}>
                  { word.value } : { word.matchedLetters }
                </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
