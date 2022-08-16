import React from 'react'

export default function LoadingScreen(props) {
  console.log('handleclick', props.props);
  
  return (
    <div>Loading...

      <button onClick={props.props}>cofnij</button>
    </div>
  )
}
