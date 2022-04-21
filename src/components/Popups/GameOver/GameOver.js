import React, { useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import { AppContext } from '../../../Home'
import './GameOver.css'

const GameOver = () => {
    const { currWord, currAttempt, gameOver, restartGame} = useContext(AppContext) 
    let { games, streak, wins, losses, tries } = JSON.parse(localStorage.getItem("stats"))
    games ++
    if (gameOver.winner){
        wins ++
        streak ++
        tries[currAttempt.currRow+1] = tries[currAttempt.currRow+1] + 1
    }
    else{
        losses ++
        streak = 0
    }
    const newData = {"games":games, "streak":streak, "wins":wins, "losses":losses, "tries":tries}
    localStorage.setItem("stats", JSON.stringify(newData))
    console.log(localStorage.getItem("stats"))



    return (
        <div className={`gameOver ${gameOver.winner ? 'winner' : 'looser'}`}>
            <IoClose aria-label="close button" className="class-btn close" style={{color: "white"}} onClick={() => restartGame()} type="image"/> 
            <div className="gameOverInner">
                <div className="gameOverTitle">
                    <h1>{gameOver.winner ? "You Win!" : "You Lose!"}</h1>
                </div>
                <hr/>
                <br/>

                <div className="results">
                    <h2>Word: {currWord}</h2>
                    <br/>
                    <h2>Attempts: {currAttempt.currRow+1}</h2>
                </div>
            </div>
        </div>
    )

}
export default GameOver