import React, { Component } from 'react'
import Answers from './Answers.js'
import {db} from '../firebase-config.js' 
import {collection, getDocs, addDoc, updateDoc, doc, onSnapshot} from 'firebase/firestore'
import '../scss/Waitingroom.scss'

export default class Hardcore extends Component {
   constructor(props) {
    super(props);
    this.state = {
      handleclick: this.props.props.handleclick,
       questions: this.props.props.questions,
      losuj: this.props.props.losuj,
      numbers: this.props.props.numbersarray,
      answers: this.props.props.answers,
      length: this.props.props.length,
      category: this.props.props.category,
       width: 0,
       time: 10,
       qnr: 1,
       score: 0,
       lives: 3,
       mount: true,
       color: null,
       red: 0,
      green: 255,
      answersTab: [],
      showAnswers: false
    };
 }

     reset = ()=>{
      this.setState({time: 10})
      this.setState({width: 0})
   }

   interval1 =  ()=> {setInterval(()=>{
      
          this.setState(prev=>{
            return {
              time: prev.time - 1,
            }})
          if(this.state.time===0)
          this.setState({time: 10})
          
        }, 1000)}

    interval2=()=>{
       setInterval(()=>{
        if(typeof InstallTrigger == 'undefined'){
         this.setState(prev=>{
          return {
            width: prev.width + 0.1,
          }})}
          else{
          this.setState(prev=>{
            return {
              width: prev.width + 0.15,
            }})}

         if(this.state.width>=100){
           this.setState({width: 0})
            this.setState(prev=>{
              return {
                qnr: prev.qnr + 1
              }
            })

            this.setState({time: 0})
            this.setState(prev=>{
              return {
                lives: prev.lives - 1
              }
            })

            if(this.state.lives===3){
              document.querySelector('#heart3').classList.add("missed")
            }
            if(this.state.lives===2){
              document.querySelector('#heart2').classList.add("missed")
            }
            if(this.state.lives===1){
              document.querySelector('#heart1').classList.add("missed")
            }
         }

         this.setState({red: `${this.state.width*2}`})
         this.setState({green: `${255-this.state.width*2}`})
         
  this.setState({color: `rgb(${this.state.red}, ${this.state.green}, 0)`})

       }, 10)
       if(this.state.qn>=3)return
     }

localfn = ()=>{

  if (localStorage.nrSurvival) {
    localStorage.nrSurvival = Number(localStorage.nrSurvival) + 1;
  } else {
    localStorage.nrSurvival = 1;
  }
 //sum of all points ever
 if (localStorage.pointsSurvival) {
  localStorage.pointsSurvival = Number(localStorage.pointsSurvival) + this.state.score;
} else {
  localStorage.pointsSurvival = this.state.score;
}

if (!localStorage.maxSurvival) {
  localStorage.maxSurvival = this.state.score;
} else if(this.state.score>localStorage.maxSurvival){
  localStorage.maxSurvival = this.state.score;
}
}
     clickfn=(e)=>{
     if ((this.state.lives===1 && e!==this.state.answers[this.state.qnr-1][4]) || this.state.qnr==this.state.length)  this.localfn()

      if(e===this.state.answers[this.state.qnr-1][4]){
        this.setState(prev=>{
          return {
            score: prev.score +1,
          }})
      }
      else{
        this.setState(prev=>{
          return {
            lives: prev.lives -1,
          }})

          if(this.state.lives===3){
            document.querySelector('#heart3').classList.add("missed")
          }
          if(this.state.lives===2){
            document.querySelector('#heart2').classList.add("missed")
          }
          if(this.state.lives===1){
            document.querySelector('#heart1').classList.add("missed")
          }
      }

      if(this.state.answersTab.length===0){
        this.setState({answersTab: [[this.state.questions[0],
           this.state.qnr,
            e,
           this.state.answers[0][4]
          ]]})
        // console.log('answersTab', [this.state.questions[this.state.qnr-1]])
      } else {
        this.setState({answersTab: [...this.state.answersTab,  [this.state.questions[this.state.qnr-1],
           this.state.qnr,
            e,
           this.state.answers[this.state.qnr-1][4]
          ]]})
      }

      console.log(this.state.answersTab)

      this.reset(); 
      this.setState(prev=>{
        return {
          qnr: prev.qnr +1,
        }})
        //size of the collection
        const size = this.state.length
      let i = 0
      
      if(this.state.numbers.length<this.state.length){
      let catRef = collection(db , this.state.category)        
      getDocs(catRef)
      .then((snapshot)=>{

        do{
          let number = Math.floor(Math.random() * size)

          if(!this.state.numbers.includes(number)){
            this.setState({numbers: [...this.state.numbers, number]})
            this.setState({questions: [...this.state.questions, 
              snapshot.docs[number].data().content,
            ]})

            this.setState({answers: [...this.state.answers, 
              [snapshot.docs[number].data().A,
              snapshot.docs[number].data().B,
              snapshot.docs[number].data().C,
              snapshot.docs[number].data().D,
              snapshot.docs[number].data().answer]

            ]})       
            i++
          }
        }while(i<2)
      })
    }
}

answers = (e)=>{
  // alert(this.state.showAnswers)
  this.setState({showAnswers: !this.state.showAnswers})
}

     componentDidMount() {
      if(this.state.mount) {
       this.reset()
       this.interval1()
       this.interval2()
      }
      this.setState({mount: false})

    }
 stats=(e)=>{
  if(e)
  document.querySelector('#stats').style.display='block'
  else
  document.querySelector('#stats').style.display='none'
}

  render() {
    return (
        <>

  {(this.state.lives>=1 && this.state.qnr<=this.state.length ) ?  
  <div onClick={this.stats(true)} >
         <div>
  
    <div className='timeWrapper' style={{width: '100%', height: '10px', filter: 'blur(2px)'}}>
      <div className='progres' style={ {background: this.state.color, width: `${this.state.width}%`, height: '100%'}}></div>
    </div>
    <div id="counting">time: { this.state.time }s</div>

  {/* //iconmonstr.com */}
  <div id="hearts">
  <svg xmlns="http://www.w3.org/2000/svg" width="154"  viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" id="heart1" className='heart'/></svg>

<svg xmlns="http://www.w3.org/2000/svg" width="154"  viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" id="heart2" className='heart' /></svg>
 
  <svg xmlns="http://www.w3.org/2000/svg" width="154" viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" id="heart3" className='heart' /></svg>

</div>
      <div id="points">Score: {this.state.score}</div>
     
        <div id="question">{this.state.questions[this.state.qnr - 1]}</div>
        <div id="answers">
          <button id="A" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][0]}>{this.state.answers[this.state.qnr-1][0]}</button>

          <button id="B" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][1]}>{this.state.answers[this.state.qnr-1][1]}</button>

          <button id="C" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][2]}>{this.state.answers[this.state.qnr-1][2]}</button>

          <button id="D" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][3]}>{this.state.answers[this.state.qnr-1][3]}</button>
         
        </div>
        <button id="quit" onClick={e=>this.state.handleclick(this.state.qnr)} >quit</button>
      </div> 
      <br></br>
      </div>
      :
      <div onLoad={this.stats(false)}>
<button id='showAnswers' onClick={e=>{this.answers()}} >see the answers</button>

{this.state.showAnswers && <Answers ans={this.answers} ansT={this.state.answersTab} />}
      <div  >
        <div id="score" style={{marginTop: '10%'}}>your score is {this.state.score}</div>
        <button onClick={e=>{this.setState({qnr: 1});  this.setState({width: 0}); this.setState({time: 10}) ;this.state.losuj(); this.setState({score: 0}); this.setState({lives:3}); 


        setTimeout(()=>{this.setState({answers: this.props.props.answers})},500)}} id="again">play again</button>
        <button onClick={  this.state.handleclick} id="anothercat">choose another category</button>
      </div>  </div> }
    
      </>
    )
  }
}
