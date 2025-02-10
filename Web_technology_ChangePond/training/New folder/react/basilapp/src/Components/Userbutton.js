import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export class Userbutton extends Component {
    render() {
        return (
            <div>
                <Link to="usereffect" className='btn btn-danger btn-sm'>usereffect</Link>
                <Link to="usereffect" className='btn btn-danger btn-sm'>userdate</Link>
            </div>
        )
    }
}

export default Userbutton
