import React ,{useState, useEffect} from 'react'
import WaitingRoom from './components/waiting-room.js'
import Stats from './components/stats.js'

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
        setDisplayplay('none')
        setDisplaymodes('block')
        setDisplaycats('none')  
        setDisplaystatsBtn('block')
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
    setDisplaystats(false)
  }
// console.log('cat',category);

  return (
    <>
  <div>sound</div>
  <button style={{display: displayStatsBtn}} onClick={showStats}>stats</button>
   {displayStats && <Stats props={hideStats}/>}

    <button onClick={e=>{showModes()}} style={{display: displayPlay}}>PLAY</button>

    <button style={{display: displayModes}} onClick={e=>{showCats('classical')}}>clasical</button>
    <button style={{display: displayModes}} onClick={e=>{showCats('hardcore')}}>hardcore</button>

    <div style={{display: displayCats}}>
    

      <button id="cat1" onClick={e=>{play(); setCategory('geography')}} >geography</button>
      <button id="cat2" onClick={e=>{play(); setCategory('history')}} >history</button>
      <button id="cat3" onClick={e=>{play(); setCategory('sport')}} >sport</button>
      <button id="cat4" onClick={e=>{play(); setCategory('maths')}} >maths</button>
      <br></br>
      <br></br>
      <button onClick={e=>{showModes()}}>choose mode</button>
    </div>

    {displayWaiting &&  <WaitingRoom props={{handleclick, category, mode}}  />}
    {/* {display4 && mode==='hardcore' && <div>wedwe</div>} */}

    </>
  )
}











