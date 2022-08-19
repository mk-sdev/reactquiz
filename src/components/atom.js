import React from 'react'
import "../scss/Quiz.scss"

export default function Atom(props) {
  // console.warn(props.props)
  return (
    <>
        <div className="atom" style={{animation: props.props}} >
  <div id="div1" className="circle">
    <div></div>
  </div>
 
  <div id="div2" className="circle">
  <div></div>
    
  </div>
  <div id="div3" className="circle">
  <div></div>
  </div>
  <div id="center"></div>
</div>
    </>
  )
}
