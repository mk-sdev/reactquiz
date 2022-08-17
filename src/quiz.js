import React ,{useState, useEffect} from 'react'
import WaitingRoom from './components/waiting-room.js'
import Stats from './components/stats.js'
import './scss/Quiz.scss'

export default function New() {
 
// const [test, setTest] = useState('')
// useEffect(() => {
//     setTest('df')
//     console.log('test',test);
// },[test]);

const [category, setCategory] = useState()
const [mode, setMode] = useState('')

const [displayPlay, setDisplayplay] = useState('block')
const [displayModes, setDisplaymodes] = useState('none')
const [displayCats, setDisplaycats] = useState('none')
const [displayWaiting, setDisplaywaiting] = useState(false)
const [displayStatsBtn, setDisplaystatsBtn] = useState('none')
const [displayStats, setDisplaystats] = useState(false)

  const  showModes=(e)=>{
    setTimeout(()=>{
      setDisplayplay('none')
      setDisplaymodes('block')
      setDisplaycats('none')  
      setDisplaystatsBtn('block')
    },400)
      //  document.querySelector('#play').style.animation='click .4s';
    }
    function showCats(e){
      setDisplaymodes('none')
      setDisplaycats('block')
      setMode(e)
    }
    function play(){
      setDisplaycats('none')
        setDisplaystatsBtn('none')
        setDisplaywaiting(true)

    }
const handleclick = () =>{
  setDisplaycats('block')
  setDisplaystatsBtn('block')
//alert('a')
    setDisplaywaiting(false)
  }
  function showStats(){
    setDisplaystats(true)
  }
  function hideStats(){

    document.querySelector('#wrapper').style.animation="hidestats .5s"
    setTimeout(()=>{
      setDisplaystats(false)

    },500)
  }
// console.log('cat',category);
useEffect(()=>{
  setTimeout(()=>{
    document.querySelector('#l').style.animation='l2 10s infinite';
  },7000)
},[])

  return (
    <>
  <div>sound</div>
  <button id="stats" style={{display: displayStatsBtn}} onClick={showStats}>stats</button>
   {displayStats && <Stats props={hideStats}/>}


    <button onClick={e=>{showModes()}} style={{display: displayPlay}} 
    onMouseEnter={e=>{document.querySelector('#p').style.animation="rotatee 1s   ease-in-out infinite alternate-reverse"}}
    id="play">
      <span id="p">P</span>
      <span id="l">L</span>
      <span id="a">A</span>
      <span id="y">Y</span>
      </button>

    <p id="powered" style={{display: displayPlay}}>powered by React</p>

    {/* <div className="react">
    
      <div className="loader"><span></span></div>
      <div className="loader"><span></span></div>
      <div className="loader"><i></i></div>
      <div className="loader"><i></i></div>
     
    </div> */}
<div className="atom" style={{display: displayPlay}}>
  <div id="div1" className="circle">
    <div></div>
  </div>
 
  <div id="div2" className="circle">
  <div></div>
    
  </div>
  <div id="div3" className="circle">
  <div></div>
  </div>
  <div id="center"></div>
</div>

<div id="modes" style={{display: displayModes}}>
    <p id="pmode">{`>`}CHOOSE THE MODE</p>

<div id="modesbtns">
    <button id='classic'  onClick={e=>{showCats('classical')}}><span>classic</span></button>
    <button id='survival'  onClick={e=>{showCats('hardcore')}}>survival</button>
</div>
    <div id="descriptions">
      <p id="classicDes">{">"} Classic: The game ends when the player answers 5 questions or when the time is gone.</p>
      <br></br>
      <p id="survivalDes">{">"} Survival: The game ends if the player loses all of their three lives or if there are no more questoins in the database</p>
      <br></br>

      <p id="idk">You have 10 seconds for each question. Good luck.</p>
    </div>
</div>

    <div style={{display: displayCats}}>
    

      <button id="cat1" onClick={e=>{play(); setCategory('geography')}} >geography</button>
      <button id="cat2" onClick={e=>{play(); setCategory('history')}} >history</button>
      <button id="cat3" onClick={e=>{play(); setCategory('sport')}} >sport</button>
      <button id="cat4" onClick={e=>{play(); setCategory('maths')}} >maths</button>
      <button id="cat5" onClick={e=>{play(); setCategory('animals')}} >maths</button>
      <br></br>
      <br></br>
      <button onClick={e=>{showModes()}}>choose mode</button>
    </div>

    {displayWaiting &&  <WaitingRoom props={{handleclick, category, mode}}  />}
    {/* {display4 && mode==='hardcore' && <div>wedwe</div>} */}

    </>
  )
}











