// import { render } from "@testing-library/react";
// import { extname } from "path";
import React, { Component } from "react";

class Methoddevent extends Component{
    
    greetings = ()=>{
        window.alert("welcome to my react firts method and event session here")
    }

    welcome =(...std)=>{
        window.alert(`hello smart ${std}`)
    }

    render(){
        return (<div>
            <h1>if you click this you see the windows alart</h1>
            <button type="button" onClick={()=>this.greetings()}>Click here </button>
            <button type="button" onClick={()=>this.welcome("basil ahamed")}>Click here </button>
            <br></br>
            <b onMouseOver={()=>this.greetings()}>you can hover on me </b>
        </div>)
    }
}


export default Methoddevent