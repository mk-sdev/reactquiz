import React, {useState, useEffect} from 'react'
import '../scss/Waitingroom.scss'
import Answers from './Answers'

function Classic({props}){
  
    //here set the first question or in useEffect
    // const [question, setQuestion] = useState('')
    const [point, setPoint] = useState(0)
    //number of question, max is 5
    const [qnr, setQnr] = useState(1)
    const [time, setTime] = useState(10)
    const [width, setWidth] = useState(0)
    const [color, setColor] = useState('green')
    let i=0
    const [styleTab, setStyletab] = useState([])
    const [answersTab, setAnswersTab] = useState([])
    const [showAnswers, setShowAnswers] = useState(false)

    useEffect(()=>{  
if(i>0)return

    reset()
    interval1()
    interval2()
    i++
    },[])
  
  function reset(){
    setTime(10)
     setWidth(0)
  }

  const interval1 =  ()=> {setInterval(()=>{

    setTime(time=>time-1)
    if(time===0){
    setTime(10)
      setColor('green')
    }
    if(time===7){
    setColor('lime')
    }
  }, 1000)}
  
  function interval2(){
    setInterval(()=>{
      //for some reason interval setting width works differently on firefox so script below is to fix this issue
      if(typeof InstallTrigger == 'undefined'){
      setWidth(width=>width+0.1)
      if(width>=100){
        setWidth(0)
      }}
      else{
      setWidth(width=>width+0.15)
      if(width>=100){
        setWidth(0)
      }}
    }, 10)
  }
  
  if(width>100){
    setWidth(0)
    
    if(answersTab.length===0 && qnr <6){
      setAnswersTab([[props.questions[qnr-1],
         qnr,
          '-',
         props.answers[qnr-1][4],
        ]])
    } else if(answersTab.length>0 && qnr <6) {
      setAnswersTab([...answersTab,  [props.questions[qnr-1],
         qnr,
          '-',
         props.answers[qnr-1][4]
        ]])
    }

    const updatedTab = [...styleTab, {background: 'red', boxShadow: '0 0 15px orange', filter: 'blur(2px)', transition: 'background-color .5s'}];
    setStyletab(updatedTab)
    setQnr(qnr=>qnr+1)
    reset()
  }

useEffect(()=>{
   setColor(`rgb(${width*2}, ${(255-width*2)}, 0)`)
},[width])

useEffect(()=>{
  if(qnr>=6)
  {
    if (localStorage.nrClassic) {
      localStorage.nrClassic = Number(localStorage.nrClassic) + 1;
    } else {
      localStorage.nrClassic = 1;
    }

    //sum of all points ever
    if (localStorage.pointsClassic) {
      localStorage.pointsClassic = Number(localStorage.pointsClassic) + point;
    } else {
      localStorage.pointsClassic = point;
    }
   
    if(point===5){
   if(localStorage.classic5){
    localStorage.classic5 = Number(localStorage.classic5) + 1;
   }
   else 
   localStorage.classic5 = 1 }

  }
},[qnr])

  function checkAnswer(e){
    
   if(e===props.answers[qnr-1][4]){
  
  const updatedTab = [...styleTab, {background: 'lime', boxShadow: '0 0 15px lime', filter: 'blur(2px)', transition: 'background-color .5s'}];
  setStyletab(updatedTab)
  setPoint(point=>point+1)
   }
   else{
    const updatedTab = [...styleTab, {background: 'red', boxShadow: '0 0 15px orange', filter: 'blur(2px)', transition: 'background-color .5s'}];
  setStyletab(updatedTab)
   }


   if(answersTab.length===0){
    setAnswersTab([[props.questions[qnr-1],
       qnr,
        e,
       props.answers[qnr-1][4]
      ]])
  } else {
    setAnswersTab([...answersTab,  [props.questions[qnr-1],
       qnr,
        e,
       props.answers[qnr-1][4]
      ]])
  }
  } 

  function stats(e){
    if(e)
    document.querySelector('#stats').style.display='block'
    else
    document.querySelector('#stats').style.display='none'
  }

  function answers(){
    setShowAnswers(!showAnswers)
  }

    return (
      <>
    
      <div id="circles">
        <div id='q1' className='qcircle' style={styleTab[0]} ></div> 
        <div id='q2' className='qcircle' style={styleTab[1]}></div> 
        <div id='q3' className='qcircle' style={styleTab[2]}></div> 
        <div id='q4' className='qcircle' style={styleTab[3]}></div> 
        <div id='q5' className='qcircle' style={styleTab[4]}></div>
      </div>

    {qnr<6 ?  <div onClick={stats(true)}>
    <div className='timeWrapper' style={{width: '100%', height: '10px', filter: 'blur(2px)'}}>
      <div className='progres' style={ {background: color, width: `${width}vw`, height: '100%'}}></div>
    </div>
    <div id="points">points: {point}</div>
    <div id="counting">time: {time<0 ?  setTime(10) : time}s</div>

        <div id="question">{props.questions[qnr-1]}</div>
        <div id="answers">
          <button id="A" onClick={e=>{checkAnswer(e.target.value); reset(); setQnr(qnr=>qnr+1)}} value={props.answers[qnr-1][0]}>{props.answers[qnr-1][0]}</button>

          <button id="B" onClick={e=>{checkAnswer(e.target.value); reset(); setQnr(qnr=>qnr+1)}} value={props.answers[qnr-1][1]}>{props.answers[qnr-1][1]}</button>

          <button id="C" onClick={e=>{checkAnswer(e.target.value); reset(); setQnr(qnr=>qnr+1)}} value={props.answers[qnr-1][2]}>{props.answers[qnr-1][2]}</button>

          <button id="D" onClick={e=>{checkAnswer(e.target.value); reset(); setQnr(qnr=>qnr+1)}} value={props.answers[qnr-1][3]}>{props.answers[qnr-1][3]}</button>

        </div>
        <button id="quit" onClick={e=>props.handleclick(qnr)} >quit</button>

      </div> 
      
      : 
  
      <div onClick={stats(false)}>

      <button id='showAnswers' onClick={e=>{answers()}} >see the answers</button>

      {showAnswers && <Answers ansT={answersTab} ans={answers} />}
      
        <div id='score'>your score is {point}/5</div>
        
        <button id="again" onClick={e=>{setQnr(1);  setWidth(0); setTime(10); props.losuj()}} >play again</button>
        <button id="anothercat" onClick={()=>props.handleclick()}>choose another category</button>
      </div>
      }
      </>
    )
  }
  
  export default Classic