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
    resizeImage(e.target.files[0], {maxSize: {width: 800, height: 600}})
        .then(result => document.body.prepend(result));
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
