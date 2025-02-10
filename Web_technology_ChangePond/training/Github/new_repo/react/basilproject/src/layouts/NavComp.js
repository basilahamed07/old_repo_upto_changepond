import React from 'react'
import { Link } from 'react-router-dom'
// import ClickCounterComp from "../task/ClickCounterComp"
const NavComp = () => {
    return (
        <div>
            <h1>nav componant</h1>
            <Link to="myimage" className='btn btn-danger btn-sm'>myslider</Link>
            <Link to="paramters" className='btn btn-danger btn-sm'>Parameter</Link>
            <Link to="dashbordreact" className='btn btn-danger btn-sm'>Hooks</Link>
        </div>
    )
}

export default NavComp
