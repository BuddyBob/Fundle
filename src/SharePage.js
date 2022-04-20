import React, { useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { decode as base64_decode } from 'base-64';
import Home from "./Home.js"

const SharePage = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search);
    const word = base64_decode(query.get('word'))
    return (
        <div>
            <Home sharePage={true} sharedWord={word}/>
        
        </div>
    )
}

export default SharePage