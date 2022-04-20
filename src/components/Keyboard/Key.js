import React,{ useContext } from 'react'
import { AppContext } from '../../Home'
import './Keyboard.css'

const Key = ({keyVal, special}) => {
    const { grid, setGrid, currAttempt, setCurrAttempt, checkAnswer, deleteKey, addKey, disabledLetters} = useContext(AppContext)


    

    let type = undefined
    if (special === true){
        type = "special"
    }
    if (disabledLetters.length > 0){
        if (disabledLetters.includes(keyVal.toUpperCase())){
            type = "disabled"
        }
        else{
            type = "available"
        }
    }
    else{
        type = "available"
    }


    const selected = (k) => {
        if ((currAttempt.currCol < 5) && (k !== "Enter" && k !== "Delete")){
            addKey(k)
        }
        else if ((k === "Delete") && (currAttempt.currCol > 0)){
            deleteKey(k)
        }
                else if ((k === "BACKSPACE") && (currAttempt.currCol > 0)){
          let newGrid = [...grid]
          newGrid[currAttempt.currRow][currAttempt.currCol - 1] = ""
          setGrid(newGrid)
          setCurrAttempt({...currAttempt, currCol: currAttempt.currCol-1})
        }
        else if ((k === "Enter")){
            checkAnswer()
        }
    }
    return (
        <div id={type} className="key" onClick={() => selected(keyVal)}>{keyVal}</div>
    )
}

export default Key