import React, { Component } from 'react'

export default class Stats extends Component {
constructor (props){
    super(props)
}
  render() {
   const style={
    width: '100vw', height: '100vh', background: 'orange', position: 'absolute'
   }
    return (
     <>
     <div style={style}>
      <div>S</div>
      <button onClick={this.props.props}>hdie stats</button>
      </div>
     </>
    )
  }
}
