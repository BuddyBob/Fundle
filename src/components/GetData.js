import React from 'react'

const GetData = () => {
    if (localStorage.getItem("stats") === null){
        localStorage.setItem("stats",JSON.stringify({"games":0,"streak":0,"wins":0, "losses":0, "tries":{1:0, 2:0, 3:0, 4:0, 5:0, 6:0}}))
    }
    console.log(localStorage.getItem("stats"))
    return (
        <div></div>
    )
}

export default GetData