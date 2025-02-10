import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UserEffectHook = () => {
    const [count,setCount] = useState(0);
    const [salary,setSalary] = useState(95000);
    // // case 1
    // useEffect(()=>{
    //     setCount(count+1)
    // })   

    // case 2
    // useEffect(()=>{
    //     setCount(count+1)
    // },[])

    //case 3

    useEffect(()=>{
        setCount(count+1)
    },[salary])

    




    return (
        <div>
            <h1>by using the useEffect function here infinity</h1>
            <h1>Count value is :{count}</h1>
            <h1>My salary was :{salary}</h1>
            <Button variant='contained' onClick={()=>setSalary(salary+1000)}>Increase the salary</Button>
        </div>
    )
}

export default UserEffectHook
