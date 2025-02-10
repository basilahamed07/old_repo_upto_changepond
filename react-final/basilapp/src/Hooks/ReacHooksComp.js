import React from 'react'
import { Outlet, outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ReactHookComp = () => {
    return (
        <div>
            <h1>Here we using the ReactHook</h1>
            <div className='card border-primary'>
                <div className='card-header border-danger'>
                <Link to="usereffect" className='btn btn-danger btn-sm'>usereffect</Link>
                {/* <Link to="usereffect" className='btn btn-danger btn-sm'>usereffect</Link> */}
                </div>
                <div className='card-body border-danger'><Outlet></Outlet></div>
            </div>
           
        </div>
    )
}

export default ReactHookComp
