import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Link } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add"
// import { error } from 'console';
const ProductDashboardComp = () => {
    const [productdetils,setitemdata] = useState([]);

    useEffect(()=>{
        feathdata()
    },[])

    const feathdata = ()=>{
        axios.get("http://localhost:8888/products").then((res)=>{
            setitemdata(res.data)
        }).catch((error)=>{})
    }

    const remove = (id)=>{
        if(window.confirm("are you shore do you want to delite the record"))
        axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
            window.alert("record delited succsfully")
            feathdata()
        }).catch((error)=>{})
    }
    return (
        <div>
            <h2>This is an productdashbord</h2>
            <Link to="/Maindashbord/productadd">
           <button className='btn btn-primary'><AddIcon></AddIcon> ADD</button></Link>
            <table className='table table-warning table-striped'>
                <thead className='table-danger'>
                    <tr>
                        <th>Sr.no</th>
                        <th>Nsme</th>
                        <th>price</th>
                        <th>Compamy</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    productdetils.length > 0 && productdetils.map((val,index)=>{
                    return <tr>
                        <td>{index+1}</td>
                        <td>{val.panme}</td>
                        <td>{val.Prince}</td>
                        <td>{val.company}</td>
                        <td><img src={val.img} width="200px" height="150px"/> </td>
                        <td>
                        <Link to="/Maindashbord/productUpdate/">  <button type='button' className='btn btn-warning'> 
                        <CreateIcon></CreateIcon> </button>  &nbsp; </Link>
                           
                            <button type='button' onClick={()=>remove(val.id)} className='btn btn-danger'>
                                <DeleteSweepIcon></DeleteSweepIcon>
                            </button>
                        </td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductDashboardComp
