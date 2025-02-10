import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCarComp = () => {
    const nav = useNavigate()
    const [itemData,setItemData] = useState({
       carid:"",
        carname:"",
        drivingtype:"",
        carrank:"",
        carmodel:"",
        carimage:"",
    });

    const inputChangeHandler = (events)=>{
            const {type,name,value} = events.target;
            setItemData({...itemData,[name]:value});
    }
    const addRecord = (event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8888/car`,itemData).then(()=>{
            window.alert("Record Added Successsfully");
            nav('/adminDashboard');
        }).catch((error)=>{})
    }
    return (
        <div>
            <h2>This is ProductAdd Component</h2>
            <div className='row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-6'>
            
              <form onSubmit={addRecord}>
              <label className='form-label'>Enter Car ID</label>
                 <input type='number' name="carname"  onChange={inputChangeHandler} value={itemData.carid} className='form-control' />
            
            
                 <label className='form-label'>Enter Car Name</label>
                 <input type='text' name="carname"  onChange={inputChangeHandler} value={itemData.carname} className='form-control' />
            
            
                 <label className='form-label'>Enter DriveType </label>
                 <input type='text' name="drivingtype" onChange={inputChangeHandler} value={itemData.drivingtype} className='form-control' />
                
                 <label className='form-label'>Enter Rank </label>
                 <input type='text' name="carrank" onChange={inputChangeHandler} value={itemData.carrank} className='form-control' />
                
                 <label className='form-label'>Enter Model </label>
                 <input type='text' name="carmodel" onChange={inputChangeHandler} value={itemData.carmodel} className='form-control' />
                
                 <label className='form-label'>Enter Image </label>
                 <input type='text '   name="carimage" onChange={inputChangeHandler} value={itemData.carimage} className='form-control' />
                
                 <button type='submit' className='btn btn-primary mt-2'>Submit</button>
              </form>

              </div>
              <div className='col-sm-3'></div>
             </div>
         </div>
    )
}
    

export default AddCarComp
