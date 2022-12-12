import React, { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
function App() {
  
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]; //fjalet e supozuara
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); //ruajme fjalen e supozuar qe kemi gjetur

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  console.log(wordToGuess);
  return (
    <div className="App">
      <div className="lose">
        Lose or win
      </div>
      <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
      <Keyboard />
      </div>
      
    </div>
  );
}

export default App;
