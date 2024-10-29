import React,{useState} from "react"
import Question from "./Question"

function Username(){

    let[name,setname]=useState("")
    let[error,seterror]=useState("")
    let[submitted,setsubmitted]=useState(false)
    let[displayed,setdisplayed]=useState(true)
const handlename=(event)=>{
setname(event.target.value)
}
const submitname=()=>{
    if(name.trim() !==""){
        setsubmitted(true)
        seterror(" ")
        setdisplayed(false)
    }
else {
    setsubmitted(false)
    seterror(error="Please enter your name to sign in")}
}
    
    return(<>
    <div className="username" style= {{display:displayed?"block":"none"}} >
    <label>Enter your Username</label>
    <br></br>
    <input type="text" value={name} onChange={handlename}></input>
    <br></br>
    <button type="button" onClick={submitname}>Sign in </button>
    </div>
    <p>{error}</p>
    {submitted && <Question/>}
    </>
    );
}
export default Username