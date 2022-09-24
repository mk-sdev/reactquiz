import React, {useState, useEffect} from 'react'
import Classic from './classic.js'
import Survival from './survival.js'
import LoadingScreen from './loading-screen.js'
import {db} from '../firebase-config.js' 
import {collection, getDocs} from 'firebase/firestore'
import '../scss/Waitingroom.scss'
export default function WaitingRoom({props}) {
    const [category, setCategory] = useState(props.category)
    const [questions, setQuestions] = useState({5: false})
    //the size of the collection (counting starting from 0):
    const [length, setLength] = useState()
    const [answers, setAnswers] = useState([])
    //sets  the document from the collection (number is its ID)
    const [numbersarray, setNumbers] = useState()
    //hiding the loading screen and showing the game:
const [show, setShow] = useState(false)
const handleclick = props.handleclick

function losuj(){
  setQuestions({5:false})
  setShow(false)

   let catRef = collection(db, category)  
      
  getDocs(catRef)
  .then((snapshot)=>{
      let size = snapshot.docs.length -1
      setLength(size +1)
      
      let i =0
      let numbers=[]
    do{
      let number = Math.floor(Math.random() * size + 1)
      if(!numbers.includes(number)){
        numbers.push(number)     
        i++
      }
    }while(i<5)
setNumbers(numbers)

  const q1=snapshot.docs[numbers[0]].data().content
  const q2=snapshot.docs[numbers[1]].data().content
  const q3=snapshot.docs[numbers[2]].data().content
  const q4=snapshot.docs[numbers[3]].data().content
  const q5=snapshot.docs[numbers[4]].data().content

    const o1=[
      snapshot.docs[numbers[0]].data().A,
      snapshot.docs[numbers[0]].data().B,
      snapshot.docs[numbers[0]].data().C,
      snapshot.docs[numbers[0]].data().D,
      snapshot.docs[numbers[0]].data().answer
    ]
    const o2=[
      snapshot.docs[numbers[1]].data().A,
      snapshot.docs[numbers[1]].data().B,
      snapshot.docs[numbers[1]].data().C,
      snapshot.docs[numbers[1]].data().D,
      snapshot.docs[numbers[1]].data().answer
    ]
    const o3=[
      snapshot.docs[numbers[2]].data().A,
      snapshot.docs[numbers[2]].data().B,
      snapshot.docs[numbers[2]].data().C,
      snapshot.docs[numbers[2]].data().D,
      snapshot.docs[numbers[2]].data().answer
    ]
    const o4=[
      snapshot.docs[numbers[3]].data().A,
      snapshot.docs[numbers[3]].data().B,
      snapshot.docs[numbers[3]].data().C,
      snapshot.docs[numbers[3]].data().D,
      snapshot.docs[numbers[3]].data().answer
    ]
    const o5=[
      snapshot.docs[numbers[4]].data().A,
      snapshot.docs[numbers[4]].data().B,
      snapshot.docs[numbers[4]].data().C,
      snapshot.docs[numbers[4]].data().D,
      snapshot.docs[numbers[4]].data().answer
    ]
setAnswers([o1, o2, o3, o4, o5])

    setQuestions([q1, q2, q3, q4, q5])

  })
  .catch(()=>{
    //
  })

}
    useEffect(()=>{
      losuj()
       
    },[])

    useEffect(()=>{
  
        setTimeout(()=>{
        },10000)
        if(questions[5]!==false){
          setShow(true)
          }
    },[questions])

  return (
  <>
    <div id="Panel2">
    <React.StrictMode> 
    {show===true && props.mode==='classical' && <Classic props={{handleclick, questions, losuj, answers}}/>}</React.StrictMode> 

    {show===true && props.mode==='hardcore' && <Survival props={{handleclick, questions, losuj, numbersarray, answers, length, category}}/>}

    {show===false && <LoadingScreen props={handleclick}/>}
    </div>
    </>
  )
}
