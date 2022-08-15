import React ,{useState, useEffect} from 'react'
import Loading from './components/loading.js'


export default function New() {
 
// const [test, setTest] = useState('')
// useEffect(() => {
//     setTest('df')
//     console.log('test',test);
// },[test]);

const [category, setCategory] = useState()
const [mode, setMode] = useState('')

const [display1, setDisplay1] = useState('block')
const [display2, setDisplay2] = useState('none')
const [display3, setDisplay3] = useState('none')
const [display4, setDisplay4] = useState(false)


    function modee(e){
        setDisplay1('none')
        setDisplay2('block')
        setDisplay3('none')  
    }
    function cat(e){
      setDisplay2('none')
      setDisplay3('block')

      setMode(e)
    }
    function play(){
      setDisplay3('none')
      setDisplay4(true)

    }
const handleclick = () =>{
  setDisplay3('block')

    setDisplay4(false)
  }
// console.log('cat',category);

  return (
    <>
  <div>sound</div>
    <button onClick={modee} style={{display: display1}}>PLAY</button>

    <button style={{display: display2}} onClick={e=>{cat('classical')}}>clasical</button>
    <button style={{display: display2}} onClick={e=>{cat('hardcore')}}>hardcore</button>

    <div style={{display: display3}}>
    <div>stats</div>

      <button id="cat1" onClick={e=>{play(); setCategory('geography')}} >geography</button>
      <button id="cat2" onClick={e=>{play(); setCategory('history')}} >history</button>
      <button id="cat3" onClick={e=>{play(); setCategory('chemistry')}} >chemistry</button>
      <button id="cat4" onClick={e=>{play(); setCategory('mathsRef')}} >maths</button>
      <br></br>
      <br></br>
      <button onClick={modee}>choose mode</button>
    </div>

    {display4 &&  <Loading props={{handleclick, category, mode}}  />}
    {/* {display4 && mode==='hardcore' && <div>wedwe</div>} */}

    </>
  )
}











