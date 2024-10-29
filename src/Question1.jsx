import React,{useState} from "react"
import fletter from './images/f letter.jpg'
import pig from './images/pig.jpg'
import Question2 from "./Question2"
function Question1(){
    let [answer1,setAnswer1]=useState()
    let [clickedbutton1,setClickedButton1]=useState(false)
    let [clickedwong1button1,setClickedwrong1Button1]=useState(false)
    let [clickedwong2button1,setClickedwrong2Button1]=useState(false)
    let [resetbutton1,setResetButton1]=useState(true)
    let[sourcebutton1,setSourceButton1]=useState(fletter)
    let[nextQuestion1,setnextQuestion1]=useState(false)
    let[displayedquest1,setdisplayedquest1]=useState(true)
    const handleCorrectAnswer1=()=>{
        setAnswer1(answer1="you guessed it");
        setClickedButton1(!clickedbutton1)
        setnextQuestion1(true)
        setdisplayedquest1(false)
    }
    const handleWrong1Answer1=()=>{
        setAnswer1(answer1="Wrong answer try again");
        setClickedwrong1Button1(!clickedwong1button1)
    }
    const handleWrong2Answer1=()=>{
        setAnswer1(answer1="Wrong answer try again");
        setClickedwrong2Button1(!clickedwong2button1)
    }
    const resetButton1=()=>{
        setAnswer1(answer1=" ")
        setResetButton1(resetbutton1=false)
    }
    const resetimagemelonsource1=()=>{
        setSourceButton1(sourcebutton1=pig)
    }
    const resetimagewatersource1=()=>{
        setSourceButton1(sourcebutton1=fletter)
    }

return (<>
<div  className="allcontent1" style= {{display:displayedquest1?"block":"none"}}>

    <div className="content1">
     <button type="button" onClick={()=>resetimagewatersource1()} className="clickleft1" > &lt; </button>
     <img src={sourcebutton1} alt="pic of water" ></img>
     <button type="button"  onClick={()=>resetimagemelonsource1()} className="clickright1" > &gt; </button>

    </div>
    <p>{answer1}</p>
    <div className="questions1">
        
        <button type="button" id="wrong" onClick={()=>handleWrong1Answer1()} 
        style={{border:`2px solid ${clickedwong1button1 && resetbutton1  ?'red':null}`}} >Feijoas</button>

        <button type="button" id="wrong"  onClick={()=>handleWrong2Answer1()} 
        style={{border:`2px solid ${clickedwong2button1 && resetbutton1?'red':null }`}}>orange</button>
        
          <button type="button"  className="correct" onClick={()=>handleCorrectAnswer1()} 
        style={{ border:`5px solid ${clickedbutton1 && resetbutton1 ?'green':'black' }`}}>Fig</button>

    </div>
 
    </div> 
    {nextQuestion1 && <Question2/>}

   
       </>
)
}
export default Question1