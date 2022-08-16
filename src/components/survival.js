import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import {db} from '../firebase-config.js' 
import {collection, getDocs, addDoc, updateDoc, doc, onSnapshot} from 'firebase/firestore'
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
       width: 0,
       time: 10,
       qnr: 1,
       score: 0,
       lives: 3,
       mount: true
    };
 }

     reset = ()=>{
      this.setState({time: 10})
      this.setState({width: 0})
   }

   interval1 =  ()=> {setInterval(()=>{
          // console.log('asasda');
      
          this.setState(prev=>{
            return {
              time: prev.time - 1,
            }})
          if(this.state.time===0)
          this.setState({time: 10})
          
          // clearInterval(interval1) nie działa
        }, 1000)}

    interval2=()=>{
       setInterval(()=>{
        //  console.log('q', this.state.width);
         
         this.setState(prev=>{
          return {
            width: prev.width + 0.1,
          }})
         if(this.state.width>=100){
           this.setState({width: 0})
            this.setState(prev=>{
              return {
                qnr: prev.qnr + 1
              }
            })

            this.setState(prev=>{
              return {
                lives: prev.lives - 1
              }
            })

         }
       }, 10)
       if(this.state.qn>=3)return

     }

     clickfn=(e)=>{

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
      }

      this.reset(); 
      this.setState(prev=>{
        return {
          qnr: prev.qnr +1,
        }})
        //size of the collection
        const size = this.state.length
      let i = 0
      
      if(this.state.numbers.length<this.state.length){
      let mathsRef = collection(db ,'maths')        
      getDocs(mathsRef)
      .then((snapshot)=>{

        do{
          let number = Math.floor(Math.random() * size)
          // console.warn('number', this.state.numbers);

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

    // console.log('numbers', numbers);        
            i++
          }
        }while(i<2)
      })
    }
    console.log('numberssss', this.state.numbers.length);
    console.log('size', this.state.length);
    console.log('answers', this.state.answers[0]);

    // jeszcze dodać warunek że jak już wszystkie pytania się wyczerpałąy to nie dawać więcej
    // do{
    //   let number = Math.floor(Math.random() * size+1)
    //   if(!this.state.numbers.includes(number)){
    //     i++
    // this.setState({questions: [...this.state.questions, number]})
    // console.log('numberspo', this.state.questions);
    //   }
    // }while(i<2)
}

     componentDidMount() {
      if(this.state.mount) {
       this.reset()
       this.interval1()
       this.interval2()
      //  this.setState({answers: this.props.props.answers});
      //  this.setState({questions: this.props.props.questions});
      }
      this.setState({mount: false})

   
    }

  render() {
 

    return (
        <>
        {/* <button onClick={e=>{this.test()}}>zmień</button>
  <div>{this.state.width}</div> */}
  {(this.state.lives>=1 && this.state.qnr<=this.state.length ) ?  
  <div>
  <div>wszystkie pytania: {this.state.questions}</div>
         <div>
      <div id="counting">time: { this.state.time }</div>
    <div style={{width: '500px', height: '5px', border: '1px solid black'}}>
      <div style={ {background: 'black', width: `${this.state.width}%`, height: '100%'}}></div>
    </div>
  
      <div>this is class component and this is question nr: {this.state.qnr}</div>
      <div>You have {this.state.lives} lives</div>
     
        <div id="question">question conetnt: {this.state.questions[this.state.qnr - 1]}</div>
        <div id="answers">
          <button id="A" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][0]}>{this.state.answers[this.state.qnr-1][0]}</button>

          <button id="B" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][1]}>{this.state.answers[this.state.qnr-1][1]}</button>

          <button id="C" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][2]}>{this.state.answers[this.state.qnr-1][2]}</button>

          <button id="D" onClick={e=>{this.clickfn(e.target.value)}} value={this.state.answers[this.state.qnr-1][3]}>{this.state.answers[this.state.qnr-1][3]}</button>


          <button onClick={e=>this.state.handleclick(this.state.qnr)} >give up</button>
        </div>
      </div> 
      score: {this.props.props.answers}
      <br></br>
       score: {this.state.answers}
      </div>
      :
      <div>
 

      <div>
        <div>your score is {this.state.score}</div>
        <button onClick={e=>{this.setState({qnr: 1});  this.setState({width: 0}); this.setState({time: 10}) ;this.state.losuj(); this.setState({score: 0}); this.setState({lives:3}); 
        setTimeout(()=>{this.setState({answers: this.props.props.answers})},500)}}>play again</button>
        <button onClick={this.state.handleclick}>choose another category</button>
      </div>  </div> }
    
      </>
    )
  }
}
