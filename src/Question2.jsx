import React,{useState} from "react"
import ear from './images/ear.jpg'
import phone from './images/phone.jpg'
function Question2(){
    let [answer2,setAnswer2]=useState()
    let [clickedbutton2,setClickedButton2]=useState(false)
    let [clickedwong1button2,setClickedwrong1Button2]=useState(false)
    let [clickedwong2button2,setClickedwrong2Button2]=useState(false)
    let [resetbutton2,setResetButton2]=useState(true)
    let[sourcebutton2,setSourceButton2]=useState(ear)
    let[nextQuestion2,setnextQuestion2]=useState(false)
    let[displayedquest2,setdisplayedquest2]=useState(true)
    const handleCorrectAnswer2=()=>{
        setAnswer2(answer2="you guessed it");
        setClickedButton2(!clickedbutton2)
        setnextQuestion2(true)
        setdisplayedquest2(false)
    }
    const handleWrong1Answer2=()=>{
        setAnswer2(answer2="Wrong answer try again");
        setClickedwrong1Button2(!clickedwong1button2)
    }
    const handleWrong2Answer2=()=>{
        setAnswer2(answer2="Wrong answer try again");
        setClickedwrong2Button2(!clickedwong2button2)
    }
    const resetButton2=()=>{
        setAnswer2(answer2=" ")
        setResetButton2(resetbutton2=false)
    }
    const resetimagemelonsource2=()=>{
        setSourceButton2(sourcebutton2=phone)
    }
    const resetimagewatersource2=()=>{
        setSourceButton2(sourcebutton2=ear)
    }

return (
<div >
    <div className="content2">
     <button type="button" onClick={()=>resetimagewatersource2()} className="clickleft2" > &lt; </button>
     <img src={sourcebutton2} alt="pic of water" ></img>
     <button type="button"  onClick={()=>resetimagemelonsource2()} className="clickright2"> &gt; </button>

    </div>
    <p>{answer2}</p>
  
    <div className="questions2">
       
        <button type="button" id="wrong" onClick={()=>handleWrong1Answer2()} 
        style={{border:`2px solid ${clickedwong1button2 && resetbutton2  ?'red':null}`}} >eardrum</button>
        
        <button type="button"  className="correct" onClick={()=>handleCorrectAnswer2()} 
        style={{ border:`5px solid ${clickedbutton2 && resetbutton2 ?'green':'black' }`}}>earphones</button>

        <button type="button" id="wrong"  onClick={()=>handleWrong2Answer2()} 
        style={{border:`2px solid ${clickedwong2button2 && resetbutton2?'red':null }`}}>headphones</button>


    </div>
   
  

    <button type="button" onClick={()=>resetButton2()}>↻</button>
       </div>
)
}
export default Question2  