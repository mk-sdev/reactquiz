import React, {useEffect} from 'react'
import '../scss/Answers.scss'

export default function Answers(props) {

  return (
    <div id='answersdiv' >
        
        <div id="answerss">

        {props.ansT.map((a, i)=>(

        <div className='answers' key={i}>
        <div className='Q'>
        <b style={{color: 'orange'}}>{i+1}.</b> {props.ansT[i][0]}</div>
        <div >your answer:&nbsp;
        <b style={{color: props.ansT[i][2]===props.ansT[i][3] ? 'lime' : 'red'}}
        >{props.ansT[i][2]}</b>
        </div>
        <div >correct answer: <b>{props.ansT[i][3]}</b></div>
        </div>))}
        
        </div>

        <button id='goback' onClick={e=>{props.ans()}}>go back</button>
        </div>
  )
}