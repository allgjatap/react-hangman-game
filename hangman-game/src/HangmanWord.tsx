type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
}

export function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
   
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        color: "black"
      }}
    >
        {wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom: '.1em solid rgb(61, 60, 61)'}} key={index}>
                <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden", }}>
                {letter}
                </span>
                </span>
        ))}
    </div>
  );
}
