import React, { Component } from 'react'
import { Outlet } from 'react-router'
import NavComp from '../Layout/NavComp'
import FooterComp from '../Layout/FooterComp'

export class VirtualDom extends Component {
    constructor(){
        super()
        this.state={
            breakfast:[{id:1,
                name:"poori"},
                {id:2,
                name:"dosai"},
                {id:3,
                name:"biriyani"},
                {id:4,
                name:"vadai"},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>this is an virtual dom concept</h1>
                <ul>
                    {this.state.breakfast.map((val,index)=>{
                         return <li key={index}>{val.name}</li>
                    })}
                </ul>
                
                <div className='card'>
                    <div><NavComp></NavComp></div>
                    <div><Outlet></Outlet></div>
                    <div><FooterComp></FooterComp></div>
                </div>
                
            </div>
        )
    }
}

export default VirtualDom
