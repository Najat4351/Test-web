import React,{useState} from "react"
import waterpic from './images/waterpic.jpg'
import melon from './images/melon.jpg'
import Question1 from "./Question1"
function Question(){
    let [answer,setAnswer]=useState()
    let [clickedbutton,setClickedButton]=useState(false)
    let [clickedwong1button,setClickedwrong1Button]=useState(false)
    let [clickedwong2button,setClickedwrong2Button]=useState(false)
    let [resetbutton,setResetButton]=useState(true)
    let[sourcebutton,setSourceButton]=useState(waterpic)
    let[nextQuestion,setnextQuestion]=useState(false)
    let[displayedquest,setdisplayedquest]=useState(true)
    const handleCorrectAnswer=()=>{
        setAnswer(answer="you guessed it");
        setClickedButton(!clickedbutton)
        setnextQuestion(true)
        setdisplayedquest(false)
    }
    const handleWrong1Answer=()=>{
        setAnswer(answer="Wrong answer try again");
        setClickedwrong1Button(!clickedwong1button)
    }
    const handleWrong2Answer=()=>{
        setAnswer(answer="Wrong answer try again");
        setClickedwrong2Button(!clickedwong2button)
    }
    const resetButton=()=>{
        setAnswer(answer=" ")
        setResetButton(resetbutton=false)
    }
    const resetimagemelonsource=()=>{
        setSourceButton(sourcebutton=melon)
    }
    const resetimagewatersource=()=>{
        setSourceButton(sourcebutton=waterpic)
    }

return (
    <>
<div  className="allcontent" style= {{display:displayedquest?"block":"none"}}>
    <div className="content">
     <button type="button" onClick={()=>resetimagewatersource()}  className="clickleft" > &lt; </button>
     <img src={sourcebutton} alt="pic of water" ></img>
     <button type="button"  onClick={()=>resetimagemelonsource()} className="clickright"> &gt; </button>

    </div>
    <p>{answer}</p>
    <div className="questions">
        <button type="button"  className="correct" onClick={()=>handleCorrectAnswer()} 
        style={{ border:`5px solid ${clickedbutton && resetbutton ?'green':'black' }`}}>watermelon</button>
        <button type="button" id="wrong" onClick={()=>handleWrong1Answer()} 
        style={{border:`2px solid ${clickedwong1button && resetbutton  ?'red':null}`}} >melon</button>

        <button type="button" id="wrong"  onClick={()=>handleWrong2Answer()} 
        style={{border:`2px solid ${clickedwong2button && resetbutton?'red':null }`}}>grapes</button>


    </div>
   
    
    </div>

      {nextQuestion && <Question1/>}
      
    
      </>
)
}
export default Question