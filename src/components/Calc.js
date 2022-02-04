import React, { Component } from "react";
class Calc extends  Component{
    constructor(){
        super()
        this.state={count:0}

    }
    incrementValue(){
       // this.setState({count:this.state.count+1})
       this.setState((prevValue)=>({
           count:prevValue.count+1
       }))
    }
    incrementValueThree(){
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()

    }
    render(){
        return(<div>
        <div>count-{this.state.count} </div>
        <button onClick={()=>this.incrementValueThree()}>Plus</button>
        </div>)
    }
}
export default Calc