import React, { useEffect, useState } from 'react'

const FormValComp = () => {
const [user,setUser] = useState({
    username:"",
    userpassword:"",
    term:false
})
  const inputchangehandler = (event)=>{

  
  const {type,name,value} = event.target;
  setUser({[name]:value})
  }

  const checkData = (event)=>{
    event.preventDefault();
    if(user.username.trim()===""){
        window.alert("user name is request")
        return false
    }
    if(!user.username.trim().match("^[a-zA-Z]{4,20}$")){
        window.alert("enter the username atleast 4 to 20 character")
        return false
    }
    if(user.userpassword.trim()===""){
        window.alert("password is request")
        return false
    }
    if(!user.userpassword.trim().match("^[a-zA-Z@.*&)()]{4,20}$")){
        window.alert("enter the password atleast 4 to 20 character")
        return false
    }
    if(user.term===false){
        window.alert("please check the terms and condiction")
        return false
    }

  }
    return (
        <div>
            <h1>This is an form validation</h1>
            <form onSubmit={checkData}>
                <label> Enter the user name here:</label><br/>
                <input type='text' name="username" onChange={inputchangehandler} value={user.username}></input><br/>
                <label> Enter the user Password:</label><br/>
                <input type='text' name="userpassword" onChange={inputchangehandler} value={user.userpassword}></input><br/>
                <input type='checkbox' name="term" onChange={inputchangehandler} value={user.term} /> <label>I accept the terns and condiction</label>
                <button type="submit" className='btn btn-primary mt-2'>Submit</button>
            </form>
        </div>
    )
}

export default FormValComp
