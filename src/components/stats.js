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
      <div id="panel">
        <div id="innerpanel">

        <p>games played on classic mode:&nbsp; 
        {localStorage.nrClassic ? localStorage.nrClassic : 0}</p>

        <p>games played on survival mode:&nbsp;  
        {localStorage.nrSurvival ? localStorage.nrSurvival : 0}</p>

        <p>average score on classic mode:&nbsp; 
          { localStorage.pointsClassic ? (localStorage.pointsClassic/localStorage.nrClassic).toFixed(2) : '-'}</p>

        <p>average score on survival mode:&nbsp;
        { localStorage.pointsSurvival ? (localStorage.pointsSurvival/localStorage.nrSurvival).toFixed(2) : '-'}</p>
     

        <p>5/5 score on classic mode:&nbsp; 
        {localStorage.classic5 ? localStorage.classic5 : 0} </p>
   
        <p>the highest score on survival mode:&nbsp; 
          {localStorage.maxSurvival ? localStorage.maxSurvival : '-'} </p>


        </div>
      <button id="hidestats" onClick={this.props.props}>hide stats</button>
      </div>
      </div>
     </>
    )
  }
}
