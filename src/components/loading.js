import React, {useState, useEffect} from 'react'
import Game from './Game.js'
import {db} from '../firebase-config.js' 
import {collection, getDocs, addDoc, updateDoc, doc, onSnapshot} from 'firebase/firestore'

export default function Loading(props) {
    
    const [questions, setQuestions] = useState({5: false})
const [show, setShow] = useState(false)
    useEffect(()=>{
    console.log('a',props.category);

        const mathsRef = collection(db ,'maths')
        // console.log('maths', mathsRef);
        // const [questions, setQuestions] = useState([])
        
        getDocs(mathsRef)
        .then((snapshot)=>{
            // console.log('snapshot.docs',snapshot.docs)
            //this way I can get any data from collection I want
            //here I take the first document from books collection and log its name
            // console.log('1', snapshot.docs[0].data().content);
            // console.log('długość', snapshot.docs.length);
            const size = snapshot.docs.length 
       
    
            let i =0
            let numbers=[]
          do{
            let number = Math.floor(Math.random() * size+1)
            if(!numbers.includes(number))
            {
              // console.log(snapshot.docs[number].data().content);
              numbers.push(number)
              
              i++
            }
          }while(i<5)
         
        //   setQuestions({
        //     1: 'wedecwe',  
        //     2: 'wedecwe',
        //     3: 'wedecwe',
        //     4: 'wedecwe',
        //     5: 'wedecwe'
        //   })
console.log('qqq',snapshot.docs[numbers[4]].data().content);

        const q1=snapshot.docs[numbers[0]].data().content
        const q2=snapshot.docs[numbers[1]].data().content
        const q3=snapshot.docs[numbers[2]].data().content
        const q4=snapshot.docs[numbers[3]].data().content
        const q5=snapshot.docs[numbers[4]].data().content
          setQuestions({
            // 1: q1,  
            // 2: q2,
            // 3: q3,
            // 4: q4,
            5: q5,
          })
console.log('qqq',q1, q2, q3, q4, q5);

        // alert(questions) 
        // alert('e')
          
        })
        // setQuestions({5:true})
    },[])

    useEffect(()=>{
        console.log('x');
        
        setTimeout(()=>{
            console.log('questions', questions);

        },10000)
        
    },[questions])

    if(questions[5]!==false){
    setShow(true)
console.log('piąte',questions[5])
    }
  return (
  <>
    <div>loading</div>


    {show && <Game props={questions}/>}
    </>
  )
}
