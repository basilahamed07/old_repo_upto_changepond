import React, { Component } from "react";

class MyDetails extends Component{
    constructor(){
        super()
        this.MyDeatils = {
            gender:"Male",
            maritial:"single",
            address:"Chennai"
        }

    }
    render(){
        const {gender,maritial,address} = this.MyDeatils
        const {fname,lname,conatct,email} = this.props
        return <div>
        <h1>my name is {fname}, last name is {lname}, conatct was {conatct} , email was {email}</h1>
        <h1>gender wad {gender}, maritial status was {maritial}, address  was {address}</h1>
        </div>
    }
}

export default MyDetails 