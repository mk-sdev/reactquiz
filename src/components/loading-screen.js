import React from 'react'
import '../scss/Waitingroom.scss'
import "../scss/Quiz.scss"
import Atom from './atom.js'
import '../scss/Atom.scss'

export default function LoadingScreen(props) {
  console.log('handleclick', props.props);
  if(!navigator.onLine){
    // alert('a')
  }
  return (
    <>
      {/* <button onClick={props.props}>cofnij</button> */}

{navigator.onLine ? <Atom props={'react .5s ease-in-out'}/>
      
      :

      <div id="offline">It seem like you have no Internet connection. Come here later.</div>
      }
  
    </>
  )
}
