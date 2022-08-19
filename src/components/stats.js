import React, { Component } from 'react'
import "../scss/Stats.scss"
export default class Stats extends Component {
constructor (props){
    super(props)
}
  render() {
  
    return (
     <>
     <div id="wrapper" >
      <div id="light"></div>
      <div id="panel">S
      <button id="hidestats" onClick={this.props.props}>hdie stats</button>
      </div>
      </div>
     </>
    )
  }
}
