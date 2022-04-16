import NavBar from './components/Nav/NavBar.js'
import Keyboard from './components/Keyboard/Keyboard.js'
import Grid from "./components/Grid/Grid.js"
import GameOver from "./components/Popups/GameOver/GameOver.js"
import GetData from './components/GetData.js'
import Giveup from './components/Popups/Giveup/Giveup.js'
import React, { createContext, useState, useEffect } from "react" 
import "./App.css"

export const AppContext = createContext()

const App = () =>  {

    const [grid, setGrid] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ])
    const [currAttempt, setCurrAttempt] = useState({currRow: 0, currCol: 0})
    const [gameOver, setGameOver] = useState({gameOver:false, winner:false})
    const wordBank = require(`./components/WordBank.json`).wordbank
    const guessBank = require(`./components/GuessBank.json`).guessbank
    const [currWord, setCurrWord] = useState("")
    const [error, setError] = useState({errorState:false, errorMessage:""})
    const [disabledLetters, setDisabledLetters] = useState([])
    const [giveUp, setGiveUp] = useState(false)

    useEffect(() => {
        GetData()
        getWord().then((word) => {
          setCurrWord(word);
        });
      }, []);


    function getWord(){
        return new Promise((resolve, reject) => {
            const randNum = Math.floor(Math.random() * wordBank.length)
            let word = wordBank[randNum]
            let letters = []
            for (let i = 0; i < word.length; i++){
                letters.push(word[i].toUpperCase())
            }
            console.log("Answer", letters.join(''))
            resolve(letters.join(''))
        })
    }
    function checkAnswer(){
        console.log("Checking answer for", grid[currAttempt.currRow])
        console.log(grid[currAttempt.currRow].join(''))
        let word = []
        for (let i = 0; i < grid[currAttempt.currRow].length; i++){
            word.push(grid[currAttempt.currRow][i].toLowerCase())
        }
        
        if (guessBank.includes(word.join('')) || wordBank.includes(word.join(''))){
            if (currAttempt.currRow < 6){
                if (currWord === grid[currAttempt.currRow].join('')){
                    setGameOver({gameOver:true, winner:true})
                }
                else if (currWord !== grid[currAttempt.currRow].join('') && currAttempt.currRow+1 === 6){
                    setGameOver({gameOver:true, winner:false})
                }
                else{
                    setCurrAttempt({currRow: currAttempt.currRow + 1, currCol: 0})
                    for (let i = 0; i < grid[currAttempt.currRow].length; i++){
                        if (!disabledLetters.includes(grid[currAttempt.currRow][i])){
                            setDisabledLetters(disabledLetters => [...disabledLetters, grid[currAttempt.currRow][i]])   
                        }
                    }
  
                }
            }
        }
        else if (currAttempt.currCol < 5){
            setError({errorState:true, errorMessage:"Too Short"})
        }
        else if (currAttempt.currCol === 5){
            setError({errorState:true, errorMessage:"Word Not Found"})
        }



    }

    function restartGame(){
        //set everything back to default
        setGrid([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
          ])
          // add 1 to games in localstorage
        setCurrAttempt({currRow: 0, currCol: 0})
        setGameOver({gameOver:false, winner:false})
        setGiveUp(false)
        setDisabledLetters([])
        
        // get new word
        const randNum = Math.floor(Math.random() * wordBank.length)
        let word = wordBank[randNum]
        let letters = []
        for (let i = 0; i < word.length; i++){
            letters.push(word[i].toUpperCase())
        }
        setCurrWord(letters.join(''))
    }
    
    function addKey(k){
        let newGrid = [...grid]
        newGrid[currAttempt.currRow][currAttempt.currCol] = k
        setGrid(newGrid)
        setCurrAttempt({...currAttempt, currCol: currAttempt.currCol+1})
    }

    function deleteKey(k){
        let newGrid = [...grid]
        newGrid[currAttempt.currRow][currAttempt.currCol - 1] = ""
        setGrid(newGrid)
        setCurrAttempt({...currAttempt, currCol: currAttempt.currCol-1})
        if (error.state === true){
            setError({errorState:false, errorMessage:""})
        }
    }

    function callError(){
        alert(error.errorMessage)
                setError({errorState:false,errorMessage:""})
    }

    function giveup(e){
        setGiveUp(e)
    }
    return (
        <div className="App">
            <NavBar />
            <AppContext.Provider value=
                {{
                    grid, 
                    setGrid,
                    currAttempt,
                    setCurrAttempt,
                    wordBank,
                    currWord,
                    checkAnswer,
                    addKey,
                    deleteKey,
                    gameOver,
                    restartGame,
                    disabledLetters

                }}>
                <div className="display">

                    <div className="g-pop">
                        {!giveUp ? 
                        <button onClick={() => giveup(true)} class="giveupBtn" role="button">Give Up?</button>
                        : null}

                        {giveUp ? <Giveup/> : null}
                    </div>

                    <Grid/>
                    {gameOver.gameOver ? <GameOver/> : <Keyboard/>}
                    
                </div>
            </AppContext.Provider>

            <div className="error">
                {error.errorState ?
                callError()
                // <Alert className="error"onClose={() => {setError({errorState:false,errorMessage:""})}} severity="error">
                //     <AlertTitle>{error.errorMessage}</AlertTitle>

                : null}
            </div>
            

        </div>
  )
}

export default App