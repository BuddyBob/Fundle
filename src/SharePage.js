import React, { useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { decode as base64_decode } from 'base-64';
import Home from "./Home.js"

const SharePage = () => {
    const location = useLocation()
    const query = new URLSearchParams(location.search);
    console.log(base64_decode(query.get('word')))
    return (
        <div>
            <Home sharePage={true}/>
        
        </div>
    )
}

export default SharePage