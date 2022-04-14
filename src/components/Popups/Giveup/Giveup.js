import React, {useContext} from 'react'
import { AppContext } from '../../../App'
import './Giveup.css'
const Giveup = () => {
  const { currWord} = useContext(AppContext) 
  return (
    <div>
        <div className="giveupPop">
            <div className="giveupPopInner">
                <h1>You Give Up</h1>
                    <h2>The word was - <strong>{currWord}</strong></h2>
            </div>
        </div>
    </div>
  )
}

export default Giveup