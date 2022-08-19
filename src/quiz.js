import React ,{useState, useEffect} from 'react'
import WaitingRoom from './components/waiting-room.js'
import Stats from './components/stats.js'
import Atom from './components/atom.js'
import './scss/Quiz.scss'
import './scss/Atom.scss'
import './scss/Play.scss'

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
    document.querySelector('#cats').style.animation='hidemodes 0.4s'

    setTimeout(()=>{
      setDisplayplay('none')
      setDisplaymodes('block')
      setDisplaycats('none')  
      setDisplaystatsBtn('block')
    document.querySelector('#cats').style.animation='start1 0.4s'

    },400)
      //  document.querySelector('#play').style.animation='click .4s';
    }
    function showCats(e){
      document.querySelector('#modes').style.animation='hidemodes 0.4s'
    //  alert('s')
      setTimeout(()=>{
        setDisplaymodes('none')
      setDisplaycats('block')
      document.querySelector('#modes').style.animation='start1 0.4s'
      // document.querySelector('#stats').style.animation='showstatsbtn 0.4s'

      }, 400)
      setMode(e)
    }
    function play(){
    document.querySelector('#cats').style.animation='hidemodes 0.4s'
    // document.querySelector('#stats').style.animation='hidestatsbtn 0.5s'
    // document.querySelector('#stats').style.animation='showstats 0.4s reverse'

    setTimeout(()=>{
      setDisplaycats('none')
      // setDisplaystatsBtn('none')
      setDisplaywaiting(true)
    document.querySelector('#cats').style.animation='start1 0.4s'

    },400)
     

    }
const handleclick = () =>{
  setTimeout(()=>{
    setDisplaycats('block')
    setDisplaystatsBtn('block')
  //alert('a')
      setDisplaywaiting(false)
      
  },400)
 
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
  {/* <div>sound</div> */}
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

{ displayPlay=='block' ?   <Atom props={'react 5.25s ease-in-out'}/> : null}
    {/* <div className="react">
    
      <div className="loader"><span></span></div>
      <div className="loader"><span></span></div>
      <div className="loader"><i></i></div>
      <div className="loader"><i></i></div>
     
    </div> */}


<div id="modes" style={{display: displayModes}}>
    <p id="pmode">{`>`}CHOOSE <span className="T">T</span>HE MODE</p>

<div id="modesbtns">
    <button id='classic'  onClick={e=>{showCats('classical')}}><span>classic</span></button>
    <button id='survival'  onClick={e=>{showCats('hardcore')}}><span>survival</span></button>
</div>
    <div id="descriptions">
      <p id="classicDes"> Classic: The game ends when the player answers 5 questions or when the time is gone.</p>
      {/* <br></br> */}
      <p id="survivalDes"> Survival: The game ends if the player loses all of their three lives or if there are no more questoins in the database. Time is up = you loose a life.</p>
      {/* <br></br> */}

      <p id="idk">You have 10 seconds for each question. Good luck.</p>
    </div>
</div>

    <div id='cats' style={{display: displayCats}}>
    
    <p id="pcat">{`>`}CHOOSE THE CATEGO<span className="T">R</span>Y</p>

<div id="catsbtns">
      <button id="cat1" className="catbtn" onClick={e=>{play(); setCategory('geography')}} >
        <span></span><span></span><span></span><span></span>
        geography</button>
      <button id="cat2" className="catbtn" onClick={e=>{play(); setCategory('history')}} >
      <span></span><span></span><span></span><span></span>
        history</button>
      <button id="cat3" className="catbtn" onClick={e=>{play(); setCategory('sport')}} >
      <span></span><span></span><span></span><span></span>
        sport</button>
      <button id="cat4" className="catbtn" onClick={e=>{play(); setCategory('maths')}} >
      <span></span><span></span><span></span><span></span>
        maths</button>
      <button id="cat5" className="catbtn" onClick={e=>{play(); setCategory('animals')}} >
      <span></span><span></span><span></span><span></span>
        animals</button>
  </div>

      <br></br>
      <br></br>
      <button id="changemode" onClick={e=>{showModes()}}>change mode</button>
    </div>

    {displayWaiting &&  <WaitingRoom props={{handleclick, category, mode}}  />}
    {/* {display4 && mode==='hardcore' && <div>wedwe</div>} */}

    </>
  )
}











