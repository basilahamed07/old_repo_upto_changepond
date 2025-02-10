import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//  import adminmodulecss from '../components/Dashboard/adminmodulecss.module.css'


 

const AdminDashboardComp = () => {
  const nav=useNavigate()
     const [itemData,setItemData] = useState([]);

     useEffect(()=>{
      fetchData()
   
    },[])
    
    const fetchData = ()=>{
      axios.get(`http://localhost:8888/car`).then((res)=>{
           console.log(res.data);
          setItemData(res.data)
      }).catch((error)=>{})
  }

    const deleteCar = (carid)=>{
     
        if(window.confirm(`Do you want to delete the CAR:${carid}`)){
           axios.delete(`http://localhost:8888/car/${carid}`).then(()=>{
            window.alert("Record Deleted Successfully!!");
fetchData();
           }).catch((error)=>{})
        }
    }
   const redirect=()=>{
    nav('/')
   }
    return (
        <div>
            <h2>This is Car Dashboard Component</h2>
           
            <Link to="/addCar" className='btn btn-primary mb-2'>
           Add</Link>
           

            <table className='table table-hover table-striped '>
              <thead>
                <tr className='table-dark'>
                    <th>ID</th><th>CARNAME</th><th>DRIVING-TYPE</th><th>RANK</th><th>MODEL</th><th>IMAGE</th><th>STATUS</th><th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {
                itemData  && itemData.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.carname}</td>
                            <td>{val.drivingtype}</td>
                            <td>{val.carrank}</td>
                            <td>{val.carmodel}</td>
                            <td><img src={val.carimage} alt="" /></td>
                            <td>
                            <button type='button'  className='btn btn-success '>
                                  Booked  
                                </button>
                            </td>
                             
                            <td>
                            <Link to={`/updateCar/${val.id}`} >
                            <button type='button'  className='btn btn-warning '  >
                           EDIT
                                </button>
           
           </Link>
           
                           
                           
                              
                              &nbsp; | &nbsp;
                              
                                <button type='button'  onClick={()=>deleteCar(val.id)} className='btn btn-danger '>
                                  DELETE  
                                </button>
                              
                               
                            </td> 
                        </tr>
                    })
                }  
              </tbody>
            </table>
           
        </div>
       
    )
}

export default AdminDashboardComp
