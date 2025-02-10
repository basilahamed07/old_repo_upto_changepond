import React, { Component } from "react";

class Confiction extends Component{

    constructor(props){
        super(props)
        this.state = {
            isCond:true
        }
    }

    render(){
        


// 2) by using the elemt as the variable
// let msg =""
//         // using the if and else statement
//         if(!this.state.isCond){  
//         msg = "admin login sucessfully"
//         }
//         else{
//         msg = "user login sucessfully"
//         }
        
//         return <h1>{msg}</h1>
//     }

// 3, using the ternary operator

// return !this.state.isCond ?<h1>admin login successfully</h1>:<h1>user login successfully</h1>


// 4.use of short circute

return this.state.isCond && <h1>Admin login sucessfully</h1>
        

    }
}

export default Confiction