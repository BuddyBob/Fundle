import React, { useContext, useCallback, useEffect} from 'react'
import Key from './Key'
import { AppContext } from "../../Home";
import './Keyboard.css'

const Keyboard = () => {
  const {
    currAttempt,
    gameOver,
    addKey,
    deleteKey,
    checkAnswer
  } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["-","A", "S", "D", "F", "G", "H", "J", "K", "L", "-"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const handleKeypress = useCallback((event) => {
      let k = event.key.toUpperCase();
      if (gameOver.gameOver !== true){
        if ((currAttempt.currCol < 5) && (keys1.includes(k) || keys2.includes(k) || keys3.includes(k))){
            addKey(k)
        }
        else if ((k === "BACKSPACE") && (currAttempt.currCol > 0)){
          deleteKey(k)
        }
        else if ((k === "ENTER")){
          checkAnswer()
        }
      }
    },[currAttempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);

    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);


  return (
    
    <div className="keyboard">
      <div className="row1">
        {keys1.map((key) => (
          <Key keyVal={key}/>
        ))}
      </div>
      <div className="row2">
        {keys2.map((key) => (
          <Key keyVal={key}/>
        ))}
      </div>
      <div className="row3">
        <Key keyVal="Delete" special/>
        {keys3.map((key) => (
          <Key keyVal={key} />
        ))}
        <Key keyVal="Enter" special/>
      </div>
    </div>
  )
}

export default Keyboard