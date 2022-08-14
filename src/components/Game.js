import React, {useState, useEffect} from 'react'



function Game(props){
  
    //here set the first question or in useEffect
    const [question, setQuestion] = useState('')
    //number of question, max is 5
    const [qnr, setQnr] = useState(1)
    const [time, setTime] = useState(10)
    const [width, setWidth] = useState(0)
    let i=0
    useEffect(()=>{  
    // if(i>0) return
   console.log('props', props)
    // const mathsRef = collection(db ,'maths')
    // console.log('maths', mathsRef.length);
    losu()
    interval1()
    interval2()

    
    // console.log(i);
    i++
    },[])


  
  function losu(){
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
    if(time===0)
    setTime(10)
    
    // clearInterval(interval1) nie działa
  }, 1000)}
  
  function interval2(){
    setInterval(()=>{
      
      setWidth(width=>width+0.1)
      if(width===100){
        setWidth(0)
      }
    }, 10)
  }
  
  if(width>100){
    setWidth(0)
    setQnr(qnr=>qnr+1)
    losu()
  }

    return (
      <>
  
  
  
    {qnr<6 ?  <div>
      <div id="counting">time: {time<0 ?  setTime(10) : time}</div>
    <div style={{width: '500px', height: '5px', border: '1px solid black'}}>
      <div style={ {background: 'black', width: `${width}%`, height: '100%'}}></div>
    </div>
  
      <div>{qnr}</div>
        {/* <div id="question">{props}</div> */}
        <div id="answers">
          <button id="A" onClick={e=>{losu(); setQnr(qnr=>qnr+1)}} >A</button>
          <button id="B" onClick={e=>{losu(); setQnr(qnr=>qnr+1)}} >B</button>
          <button id="C" onClick={e=>{losu(); setQnr(qnr=>qnr+1)}} >C</button>
          <button id="D" onClick={e=>{losu(); setQnr(qnr=>qnr+1)}} >D</button>
          {/* <button onClick={e=>handleclick(qnr)} >klik</button> */}
        </div>
      </div> 
      
      : 
  
      <div>
        <div>your score is</div>
        <button onClick={e=>{setQnr(1);  setWidth(0); setTime(10)}} >play again</button>
        {/* <button onClick={props.handleclick}>choose another category</button> */}
      </div>
      }
      </>
    )
  }
  
  export default Game