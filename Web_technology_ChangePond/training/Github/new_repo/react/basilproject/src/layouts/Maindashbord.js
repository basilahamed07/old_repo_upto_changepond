import React, {  } from 'react'
import { Outlet } from 'react-router'
import NavComp from './NavComp'
import FooterComp from './FooterComp'

const Maindashbord = () => {
    return (
        <div className='container'>
            <h1>Maindashbord working</h1>
            <div className='card border-danger'>
                <div className='card-header border-primary'><NavComp></NavComp></div>
                <div className='card-body border-danger'><Outlet></Outlet></div>
                <div className='card-footer border-warning'><FooterComp></FooterComp></div>
            </div>
            
        </div>
    )
}

export default Maindashbord
