import React ,{useState, useEffect} from 'react'
import Loading from './components/loading.js'


export default function New() {
 
// const [test, setTest] = useState('')
// useEffect(() => {
//     setTest('df')
//     console.log('test',test);
// },[test]);

const [category, setCategory] = useState()


const [display1, setDisplay1] = useState('block')
const [display2, setDisplay2] = useState('none')
const [display3, setDisplay3] = useState('none')
const [display4, setDisplay4] = useState(false)


    function mode(){
        setDisplay1('none')
        setDisplay2('block')
        setDisplay3('none')
    }
    function cat(){
      setDisplay2('none')
      setDisplay3('block')
    }
    function play(){
      setDisplay3('none')
      setDisplay4(true)

    }
const handleclick = () =>{
  setDisplay3('block')

    setDisplay4(false)
  }

  return (
    <>
  
    <button onClick={mode} style={{display: display1}}>PLAY</button>

    <button style={{display: display2}} onClick={cat}>SinglePlayer</button>

    <div style={{display: display3}}>
      <button id="cat1" onClick={e=>{play(); setCategory('geography')}} >geography</button>
      <button id="cat2" onClick={e=>{play(); setCategory('history')}} >history</button>
      <button id="cat3" onClick={e=>{play(); setCategory('chemistry')}} >chemistry</button>
      <button id="cat4" onClick={e=>{play(); setCategory('mathsRef')}} >maths</button>
      <br></br>
      <br></br>
      <button onClick={mode}>choose mode</button>
    </div>

    {display4 && <Loading z />}

    </>
  )
}











