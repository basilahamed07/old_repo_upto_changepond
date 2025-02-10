import React from 'react'
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UpdateCarComp = () => {
    const {carid} = useParams();
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
    const updateRecord = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8888/car/${carid}`,itemData).then(()=>{
            window.alert("Record Updated Successsfully");
            nav('/adminDashboard');
        }).catch((error)=>{})
    }
    useEffect(()=>{
        axios.get(`http://localhost:8888/car/${carid}`).then((res)=>{
            // console.log(res.data);
            setItemData(res.data);
        }).catch((error)=>{})
    },[])
    return (
        <div>
            <h2>This is Car Update Component</h2>
            <div className='row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-6'>
            
              <form onSubmit={updateRecord}>
                 <label className='form-label'>Enter Car Name</label>
                 <input type='text' name="carname" onChange={inputChangeHandler} value={itemData.carname} className='form-control' />
            
            
                 <label className='form-label'>Enter DriveType </label>
                 <input type='text' name="drivingtype" onChange={inputChangeHandler} value={itemData.drivingtype} className='form-control' />
                
                 <label className='form-label'>Enter Rank </label>
                 <input type='text' name="carrank" onChange={inputChangeHandler} value={itemData.carrank} className='form-control' />
                
                 <label className='form-label'>Enter Model </label>
                 <input type='text' name="carmodel" onChange={inputChangeHandler} value={itemData.carmodel} className='form-control' />
                
                 <label className='form-label'>Enter Image </label>
                 <input type='image' src={itemData.image} name="carimage" onChange={inputChangeHandler} value={itemData.carimage} className='form-control' />
                
                 <button type='submit' className='btn btn-primary mt-2'>Submit</button>
              </form>

              </div>
              <div className='col-sm-3'></div>
             </div>
         </div>
    )
}

export default UpdateCarComp
