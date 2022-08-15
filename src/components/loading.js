import React, {useState, useEffect} from 'react'
import Game from './Game.js'
import Hardcore from './hardcore.js'
import Loadingscreen from './loading-screen.js'
import {db} from '../firebase-config.js' 
import {collection, getDocs, addDoc, updateDoc, doc, onSnapshot} from 'firebase/firestore'

export default function Loading({props}) {
    
    const [questions, setQuestions] = useState({5: false})
    const [numbersarray, setNumbers] = useState()
const [show, setShow] = useState(false)
const handleclick = props.handleclick
function losuj(){
//   const mathsRef = collection(db ,'maths')        
//   getDocs(mathsRef)
//   .then((snapshot)=>{
//      console.log('jestem')
//       const size = snapshot.docs.length 
//       let i =0
//       let numbers=[]
//     do{
//       let number = Math.floor(Math.random() * size+1)
//       if(!numbers.includes(number)){
//         numbers.push(number)
// console.log('numbers', numbers);        
//         i++
//       }
//     }while(i<5)

// console.log('qqq4',snapshot.docs[numbers[4]].data().content);
// console.log('qqq3',snapshot.docs[numbers[3]].data().content);
// console.log('qqq2',snapshot.docs[numbers[2]].data().content);
// console.log('qqq1',snapshot.docs[numbers[1]].data().content);
// console.log('qqq0',snapshot.docs[numbers[0]].data().content);

//   const q1=snapshot.docs[numbers[0]].data().content
//   const q2=snapshot.docs[numbers[1]].data().content
//   const q3=snapshot.docs[numbers[2]].data().content
//   const q4=snapshot.docs[numbers[3]].data().content
//   const q5=snapshot.docs[numbers[4]].data().content
//     setQuestions(snapshot.docs[numbers[3]].data().content)
// console.log('www',q1, q2, q3, q4, q5); 
//   })
const size = 6
      let i =0
      let numbers=[]
    do{
      let number = Math.floor(Math.random() * size+1)
      if(!numbers.includes(number)){
        numbers.push(number)
// console.log('numbers', numbers);        
        i++
      }
    }while(i<5)
    setNumbers(numbers)
    setQuestions([numbers[0], numbers[1],numbers[2],numbers[3],numbers[4]])
}
    useEffect(()=>{
      losuj()
       
    },[])

    useEffect(()=>{
      
        
        setTimeout(()=>{
            // console.log('questions', questions);

        },10000)
        if(questions[5]!==false){
          setShow(true)
      // console.log('piąte',questions[5])
          }
    },[questions])

   
  return (
  <>
    <React.StrictMode> 
    {show===true && props.mode==='classical' && <Game props={{handleclick, questions, losuj}}/>}</React.StrictMode> 

    {show===true && props.mode==='hardcore' && <Hardcore props={{handleclick, questions, losuj, numbersarray}}/>}

    {show===false && <Loadingscreen/>}
    </>
  )
}
