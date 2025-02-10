// import { count } from "console";
import React, { Component } from "react";

class Setof extends Component{
    
    constructor(props){
        super()

        this.state={
            count:0,
            fname:"basil",
            lname:"ahamed"
        }
    }


    testing = "basil"
    increase = ()=>{
        this.setState({count:this.state.count+1})
    }

    decrimited = ()=>{
        this.setState({count:this.state.count-1})
    }
    hello = ()=>{
        window.alert(`hello hoe are you ${this.testing}`)
    }

    nameaddiction = ()=>{
        this.setState({fname:"Basil Ahamed"})
    }
    
    render(){


        return <div> 
        <h1 onMouseOver={()=>this.hello(this.testing)}>Hover on me dude </h1>

        <h1> decrease the number here</h1>
        <h1>count coude be {this.state.count}</h1>
        <button type="button" onClick={()=>this.decrimited()}>decrease</button>
        <button type="button" onClick={()=>this.increase()}>increase</button>



        <h1> name change</h1>
        <h1>Full name was =  {this.state.fname}</h1>
        <button type="button" onClick={()=>this.nameaddiction()}>Show the full name </button>



        </div>
    }
}


export default Setof;