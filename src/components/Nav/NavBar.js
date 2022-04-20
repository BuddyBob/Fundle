
import React, { useState, createContext} from "react";
import { IoStatsChart } from 'react-icons/io5'
import { IoSettingsSharp } from 'react-icons/io5'
import StatsPopup from '../Popups/Stats/StatsPopup.js'
import "./NavBar.css"

export const NavContext = createContext()

function NavBar() {
  const [togglePopup, setTogglePopup] = useState({popup:false, popupState:"stats"});

  function def(){

  }
  return (
    <NavContext.Provider value={{togglePopup, setTogglePopup}}>
      <div>
        <nav className="navbar">
            <div className="title">
              <h1>Fundl</h1>
            </div>
            <div className="navbar-links">
              <li>
                  {/* <IoSettingsSharp onClick={() => setTogglePopup({popup:"settings",popupState:true})} size={25} className="settings-icon"/> */}
              </li>
              <li>
                  <IoStatsChart onClick={() => {setTogglePopup({popup:true, popupState:"stats"})}} size={25} className="stats-icon"/>
              </li>
            </div>
        </nav>
        {togglePopup.popup && togglePopup.popupState === "stats" ? <StatsPopup/> : null}
              
      </div>
      </NavContext.Provider>

  )
}

export default NavBar