import React, {useContext} from 'react'
import { IoClose } from 'react-icons/io5'
import { AppContext } from '../../../Home'
import './Giveup.css'
const Giveup = () => {
  const { currWord, restartGame} = useContext(AppContext) 
  let { games, streak, losses, tries, wins } = JSON.parse(localStorage.getItem("stats"))
  losses ++
  streak = 0
  games ++ 
  const newData = {"games":games, "streak":streak, "wins":wins, "losses":losses, "tries":tries}
  localStorage.setItem("stats", JSON.stringify(newData))
  
  return (
    <div>
        <div className="giveupPop">
          <IoClose aria-label="close button" className="class-btn close2" style={{color: "white"}} onClick={() => restartGame()} type="image"/> 
            <div className="giveupPopInner">
                <h1 className="giveupTitle">You Give Up</h1>
                <h2 className="giveupDesc">The word was - <strong>{currWord}</strong></h2>
            </div>
        </div>
    </div>
  )
}

export default Giveup