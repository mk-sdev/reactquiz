import React, {useState, useEffect} from 'react'
// import '../scss/Game.css'
import '../scss/Waitingroom.scss'


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

    useEffect(()=>{  
    
if(i>0)return
   console.log('propsqq', props.handleclick)
    // const mathsRef = collection(db ,'maths')
    // console.log('maths', mathsRef.length);
    reset()
    interval1()
    interval2()

    
    // console.log(i);
    i++
    },[])


  
  function reset(){
  // alert('a')
  // console.log('q');
  
    // setQuestion(  Math.random()  )
    // setQnr(qnr=>qnr+1)
    setTime(10)
     setWidth(0)

   
  }
  const interval1 =  ()=> {setInterval(()=>{
    // console.log('asasda');

    setTime(time=>time-1)
    if(time===0){
    setTime(10)
      setColor('green')
      // alert('a')
    }
    if(time===7){
    setColor('lime')
    // alert('a')
    }


    // switch(time){
    //   case 5: setColor('red');
    //   // default: setColor('green')
    // }
    
    // clearInterval(interval1) nie działa
  }, 1000)}
  
  function interval2(){
    setInterval(()=>{
      
      setWidth(width=>width+0.1)
      if(width>=100){
        setWidth(0)
      }
    }, 10)
  }
  
  if(width>100){
    setWidth(0)
    
    
    const updatedTab = [...styleTab, {background: 'red', boxShadow: '0 0 15px orange', filter: 'blur(2px)', transition: 'background-color .5s'}];
    setStyletab(updatedTab)
    setQnr(qnr=>qnr+1)
    reset()
  }

useEffect(()=>{

   setColor(`rgb(${width*2}, ${(255-width*2)}, 0)`)
 
},[width])
useEffect(()=>{
console.log('styleTab', styleTab, qnr);

},[styleTab])
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
    {qnr<6 ?  <div>
    <div className='timeWrapper' style={{width: '100%', height: '10px', filter: 'blur(2px)'}}>
      <div className='progres' style={ {background: color, width: `${width}%`, height: '100%'}}></div>
    </div>
    <div id="counting">{'>'}time: {time<0 ?  setTime(10) : time}s</div>
  
   

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
  
      <div>
         {/* <div id="circles2">
      <div id='q1' className='qcircle qcircle1' style={styleTab[0]}></div> 
      <div id='q2' className='qcircle' style={styleTab[1]}></div> 
      <div id='q3' className='qcircle' style={styleTab[2]}></div> 
      <div id='q4' className='qcircle' style={styleTab[3]}></div> 
      <div id='q5' className='qcircle' style={styleTab[4]}></div>
      </div> */}

        <div id='score'>your score is {point}/5</div>
        
        <button id="again" onClick={e=>{setQnr(1);  setWidth(0); setTime(10); props.losuj()}} >play again</button>
        <button id="anothercat" onClick={props.handleclick}>choose another category</button>
      </div>
      }
      </>
    )
  }
  
  export default Classic