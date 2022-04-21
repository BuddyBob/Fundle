import React, { useContext, useState} from 'react'
import { IoClose } from 'react-icons/io5'
import { AppContext } from '../../../Home'
import { useNavigate } from 'react-router-dom';
import copy from "copy-to-clipboard";  
import { encode as base64_encode } from 'base-64';
import "./Share.css"

const Share = () => {
  
  const { setShare, deleteKey } = useContext(AppContext) 
  const [text, setText] = useState("")
  const [copyTxt, setCopy] = useState(false)
  const searchParams = new URLSearchParams();

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (text.length === 5){
      searchParams.append("word", base64_encode(text))
      setText("https://fundl.herokuapp.com/#/Share?" + searchParams.toString());
      copy("https://fundl.herokuapp.com/#/Share?" + searchParams.toString())
      setCopy(true)
    }
    else{
      alert("Please enter a 5 letter word")
    }

  }

  function close(){
    setShare(false)
    deleteKey()
  }
  return (
    <div className="sharePop">
        <IoClose aria-label="close button" className="class-btn close3" style={{color: "white"}} onClick={() => close()} type="image"/> 
        <div className="sharePopInner">
            <h1 className="shareTitle">Share A 5 Letter Word</h1>
            <form onSubmit={handleSubmit}>
              <input className="shareInput" type="text" value={text} onChange={handleChange} placeholder="Enter a word to share" onFocus={(event) => event.target.select()}/>
            </form>
            {copyTxt ? <h5 className="copyText">Share with a friend</h5> : null}
        </div>
    </div>
  )
}

export default Share