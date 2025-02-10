import { Button } from '@mui/material'
// import { count } from 'console'
import React, { useState } from 'react'

const UseStateHook = () => {

  const[counts, setCount]=useState(0)
  const[name, setName]=useState("Basil")
    return (
        <div>
            <h2>This below secion was count {counts} </h2>
            <Button variant='text' onClick={()=>setCount(counts+1)}>Count plus here</Button>
            <h2>Name change: {name}</h2>
            <Button variant='text' onClick={()=>setName("basil ahamed")}>Count plus here</Button>
        </div>
    )
}

export default UseStateHook
