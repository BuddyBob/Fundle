import React, {useContext} from 'react'
import { IoClose } from 'react-icons/io5'
import { AppContext } from '../../../App'
import './Giveup.css'
const Giveup = () => {
  const { currWord, restartGame } = useContext(AppContext) 
  return (
    <div>
        <div className="giveupPop">
          <IoClose aria-label="close button" className="class-btn close2" style={{color: "white"}} onClick={() => restartGame()} type="image"/> 
            <div className="giveupPopInner">
                <h1>You Give Up</h1>
                    <h2>The word was - <strong>{currWord}</strong></h2>
            </div>
        </div>
    </div>
  )
}

export default Giveup