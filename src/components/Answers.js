import React, {useEffect} from 'react'
import '../scss/Answers.scss'

export default function Answers(props) {
    console.log('props',props.ansT)
    // useEffect(()=>{

    //     props.props.map(      )

    // }, [])
  return (
    <div id='answersdiv' >
        
        <div id="answerss">

        {props.ansT.map((a, i)=>(<div 
        // style={{boxShadow:  props.props.answersTab[i][2]===props.props.answersTab[i][3] ? '0 0 12px 0px lime' : '0 0 12px 0px red'}} 
        className='answers' key={i}>
        <div className='Q'><b style={{color: 'orange'}}>{i+1}.</b> {props.ansT[i][0]}</div>
        {/* <li >nr: {props.props.answersTab[i][1]}</li> */}
        <div >your answer: <b
        style={{color: props.ansT[i][2]===props.ansT[i][3] ? 'lime' : 'red'}}
        >{props.ansT[i][2]}</b></div>
        <div >correct answer: <b>{props.ansT[i][3]}</b></div>
        </div>))}
        
        </div>

        <button id='goback' onClick={e=>{props.ans()}}>go back</button>

        </div>
  )


}







//https://javascript.plainenglish.io/how-to-push-or-append-an-element-to-a-state-array-with-react-hooks-32e75c090040

// export default function App() {
//   const [arr, setArr] = useState(["foo"]);
//   return (
//     <div className="App">
//       <button onClick={() => setArr((oldArray) => [...oldArray, "foo"])}>
//         add
//       </button>
//       <div>
//         {arr.map((a, i) => (
//           <p key={i}>{a}</p>
//         ))}
//       </div>
//     </div>
//   );
// }