
   
import React, { useContext } from "react";
import { AppContext } from "../../Home";

function Letter({ lpos, attempt }) {
  const { grid, currAttempt, currWord } = useContext(AppContext);
  const letter = grid[attempt][lpos]
  const correct = currWord[lpos] === letter;
  let almost = false
  if (!correct && letter !== ""){almost = currWord.includes(letter)}
  const letterState = ((currAttempt.currRow > attempt) && (correct ? "green" : almost ? "yellow" : "grey"))
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;