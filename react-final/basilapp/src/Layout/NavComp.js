import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import ClickCounterComp from "../task/ClickCounterComp"
const NavComp = () => {
    const nav = useNavigate()
    
    const removeee = ()=>{
        window.confirm("are you want to logout")
        sessionStorage.clear()
        nav("/logout")
    }
    return (
        <div>
            <h1>nav componant</h1>
            {/* <Link to="myimage" className='btn btn-danger btn-sm'>myslider</Link>
            <Link to="paramters" className='btn btn-danger btn-sm'>Parameter</Link>
            <Link to="dashbordreact" className='btn btn-danger btn-sm'>Hooks</Link>
            <Link to="userdtate" className='btn btn-danger btn-sm'>userdate</Link> */}
            <Link to="FormValComp" className='btn btn-danger btn-sm'>FormValidaction</Link>
            <Link to="virtualdom" className='btn btn-danger btn-sm'>virtualdom</Link>
            <Link to="userdtate" className='btn btn-danger btn-sm'>userdate</Link>
            <Link to="productadd" className='btn btn-danger btn-sm'>productadd</Link>
            <Link to="productdashbord" className='btn btn-danger btn-sm'>productdashbord</Link>
            <Link to="productUpdate" className='btn btn-danger btn-sm'>productdashbord</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <button className='btn btn-danger btn-sm float-end' onClick={()=>removeee()}>Signout</button>
        </div>
    )
}

export default NavComp
