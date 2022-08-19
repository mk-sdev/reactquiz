import React, {useState, useEffect} from 'react'
import Classic from './classic.js'
import Survival from './survival.js'
import LoadingScreen from './loading-screen.js'
import {db} from '../firebase-config.js' 
import {collection, getDocs} from 'firebase/firestore'
import '../scss/Waitingroom.scss'
export default function WaitingRoom({props}) {
    
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
  console.log(props.category)

  

   let catRef = collection(db, props.category)  
  //let catRef = collection(db, 'maths')       
  getDocs(catRef)
  .then((snapshot)=>{
     console.log('jestem')
      let size = snapshot.docs.length -1
      setLength(size +1)
      console.log('wielkość', size)
      
      let i =0
      let numbers=[]
    do{
      let number = Math.floor(Math.random() * size + 1)
      if(!numbers.includes(number)){
        numbers.push(number)
        console.log('number', number);
        
// console.log('numbers', numbers);        
        i++
      }
    }while(i<5)
setNumbers(numbers)
// console.log('qqq4',snapshot.docs[numbers[4]].data().content);
// console.log('qqq3',snapshot.docs[numbers[3]].data().content);
// console.log('qqq2',snapshot.docs[numbers[2]].data().content);
// console.log('qqq1',snapshot.docs[numbers[1]].data().content);
// console.log('qqq0',snapshot.docs[numbers[0]].data().content);
// console.log('numbers', numbers);

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
console.log('odpowiedzi', o1, o2, o3, o4, o5);
console.log('undefined?',snapshot.docs[0].data().answer );

    setQuestions([q1, q2, q3, q4, q5])
console.log('www',q1, q2, q3, q4, q5); 
  })
  .catch(()=>{
    console.log('lol');
    
  })
// const size = 6
//       let i =0
//       let numbers=[]
//     do{
//       let number = Math.floor(Math.random() * size+1)
//       if(!numbers.includes(number)){
//         numbers.push(number)
// // console.log('numbers', numbers);        
//         i++
//       }
//     }while(i<5)
//     setNumbers(numbers)
//     setQuestions([numbers[0], numbers[1],numbers[2],numbers[3],numbers[4]])
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
    <div id="Panel">
    <React.StrictMode> 
    {show===true && props.mode==='classical' && <Classic props={{handleclick, questions, losuj, answers}}/>}</React.StrictMode> 

    {show===true && props.mode==='hardcore' && <Survival props={{handleclick, questions, losuj, numbersarray, answers, length}}/>}

    {show===false && <LoadingScreen props={handleclick}/>}
    </div>
    </>
  )
}
