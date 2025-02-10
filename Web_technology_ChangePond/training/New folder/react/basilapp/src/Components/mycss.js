import React from 'react'
import staticdata from '../shared/constance/constandtdata'
import "./myclass.css"
import moduels from "./mycss.module.css" 
const Mycss = () => {


    let variable = true
const textobj = {
    color:variable?"green":"red",
    backgroundColor:!variable?"yellow":"blue",
    fontSize:variable?"30px":"50px"
}



    return (
        <div>
            <h2 style={{color:"red", backgroundColor:"aqua"}}>This is my First Css class in reactjs</h2>
            <p style={textobj}>this style was optimized by the textobj</p>


        {/* <img className='imgproperty' src={staticdata.natural}/> */}
        <img className={moduels.box} src='https://watermark.lovepik.com/photo/20211124/large/lovepik-high-mountain-scenery-in-switzerland-picture_500898601.jpg'/>
        </div>
    )
}

export default Mycss
