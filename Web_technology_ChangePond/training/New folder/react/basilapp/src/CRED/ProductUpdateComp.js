import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'




const ProductUpdateComp = () => {
        const {id} = useParams()
        const nav = useNavigate()
        const [itemdetsils,setitemdata] = useState({
            id:"",
            panme:"",
            Prince:"",
            company:"",
            img:""
        })
    
        const inputChangeHandler = (events)=>{
            const {type,name,value} = events.target;
            setitemdata({...itemdetsils,[name]:value})
        }
    
        const addRecord = (event)=>{
            event.preventDefault()
            axios.put(`http://localhost:8888/products/${id}`,itemdetsils).then(()=>{
                window.alert("record update succesfully")
                nav("/Maindashbord/productdashbord")
            }).catch((error)=>{})
        }


        useEffect(()=>{
            axios.get(`http://localhost:8888/products${id}`).then((res)=>{
                setitemdata(res.data)
            }).catch((error)=>{})
        },[])
        return (
            <div>
                <h1>This is an ProductAddComp</h1>
                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6'></div>
    
                        <form onSubmit={addRecord}>
                            <label className='form-label'>Enter the prodact name</label>
                            <input type='text' name="panme" onChange={inputChangeHandler} value={itemdetsils.panme} className='form-control'></input><br/>
                            
                            <label className='form-label'>Enter the Price</label>
                            <input type='text' name="Prince" onChange={inputChangeHandler} value={itemdetsils.Prince} className='form-control'></input>
                            
                            
                            <label className='form-label'>Enter the company</label>
                            <input type='text' name="company" onChange={inputChangeHandler} value={itemdetsils.company} className='form-control'></input>
    
                            <label className='form-label'>Enter the Image Url</label>
                            <input type='text' name="img" onChange={inputChangeHandler} value={itemdetsils.img} className='form-control'></input>
    
                            <button type='submit' className='btn btn-danger'>Submit</button>
                        </form>
                    </div>
                    <div className='col-sm-3'></div>
                </div>
        )
    }
    

export default ProductUpdateComp
