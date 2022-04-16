import React, { useContext } from 'react'
import { IoClose } from 'react-icons/io5'
import { NavContext } from '../../Nav/NavBar'
import './StatsPopup.css'

import BarChart from './BarChart'


const StatsPopup = () => {
    const { setTogglePopup } = useContext(NavContext)
    let { games, streak, wins, losses, tries } = JSON.parse(localStorage.getItem("stats"))

    return (
        <div className={'stats'}>
            <IoClose className="class-btn close1" style={{color: "white"}} onClick={() => {setTogglePopup({popup:false, popupState:""})}} type="image"/> 
            <div className="statsInner">
                <div className="statsTitle">
                    <h1>Statistics</h1>
                </div>

                <hr/>
                <br/>

                <div className="results1">
                    <div className="r1">
                        <h2 style={{"marginBottom":"40px"}} >Wins <strong>{wins}</strong></h2>
                        <h2>Losses <strong>{losses}</strong></h2>
                    </div>
                    <div className="r2">
                        <h2 style={{"marginBottom":"40px"}} >Streak <strong>{streak}</strong></h2>
                        <h2> Played <strong>{games}</strong></h2>
                    </div>
                    <br/>
                    <hr/>
                </div>
                <div className="Dis">
                    <div className="tries">
                        <BarChart/>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default StatsPopup