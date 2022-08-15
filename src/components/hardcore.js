import React, { Component } from 'react'

export default class Hardcore extends Component {
   constructor(props) {
    super(props);
    this.state = {
      handleclick: this.props.props.handleclick,
       questions: this.props.props.questions,
      losuj: this.props.props.losuj,
      numbers: this.props.props.numbersarray,
       width: 0,
       time: 10,
       qnr: 1,
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
         }
       }, 10)
       if(this.state.qn>=3)return

     }

     clickfn=()=>{
      this.reset(); 
      this.setState(prev=>{
        return {
          qnr: prev.qnr +1,
        }})
        //size of the collection
        const size = 6
      let i =0
    // jeszcze dodać warunek że jak już wszystkie pytania się wyczerpałąy to nie dawać więcej
    do{
      let number = Math.floor(Math.random() * size+1)
      if(!this.state.numbers.includes(number)){
        i++
    this.setState({questions: [...this.state.questions, number]})
    console.log('numberspo', this.state.questions);
      }
    }while(i<2)
}

     componentDidMount() {
      if(this.state.mount) {
       this.reset()
       this.interval1()
       this.interval2()
      }
      this.setState({mount: false})
    }

  render() {
 

    return (
        <>
        {/* <button onClick={e=>{this.test()}}>zmień</button>
  <div>{this.state.width}</div> */}
  
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
          <button id="A" onClick={e=>{this.clickfn()}} >A</button>

          <button id="B" onClick={e=>{this.clickfn()}} >B</button>

          <button id="C" onClick={e=>{this.clickfn()}} >C</button>

          <button id="D" onClick={e=>{this.clickfn()}} >D</button>


          <button onClick={e=>this.state.handleclick(this.state.qnr)} >give up</button>
        </div>
      </div> 
      
      
  <br></br>
  <br></br>
  <br></br>
  <br></br>

      <div>
        <div>your score is</div>
        <button onClick={e=>{this.setState({qnr: 1});  this.setState({width: 0}); this.setState({time: 10}); this.state.losuj()}} >play again</button>
        <button onClick={this.state.handleclick}>choose another category</button>
      </div>   
    
      </>
    )
  }
}
