import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const PeotectedRouting = ({Components}) => {

    const nav = useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/")

        }
    },[])
    return (
        <div>
            <Components></Components>
        </div>
    )
}

export default PeotectedRouting
