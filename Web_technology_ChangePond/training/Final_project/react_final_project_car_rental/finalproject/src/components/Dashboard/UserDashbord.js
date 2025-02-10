import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
// import Re from 'react';
import axios from 'axios';

const UserDashbord = () => {



  let userinfos = sessionStorage.getItem('user')
  const [itemData,setItemData] = useState([]);

  useEffect(()=>{
    featchuser() 
},[])

    const featchuser= () =>{
      axios.get(`http://localhost:8888/users?useremail=${userinfos}`).then((referance)=>{
          // setItemData(referance.data)
          setItemData(referance.data)
          console.log(referance.data)
      }).catch((error)=>{})
  }
    {
      return <div class="container">{

        itemData.map((val, index) => (
          <div><h1>{val.username}</h1></div>))
      }
        
      <nav class="navbar navbar-expand-lg mt-5">
        <div class="container-fluid " >
         <Link to="luxories"><button className='btn ' id='button-29'> <a class="navbar-brand text-dark " href="#">Luxurious Car</a></button></Link> 
         <Link to="Sports"> <button className='btn btn-warning' id='button-29'> <a class="navbar-brand text-dark" href="#">Sports Car</a></button></Link>
         <Link to="delux">  <button className='btn btn-warning ' id='button-29'> <a class="navbar-brand text-dark" href="#">delux Car</a></button></Link>
         <Link to="superlux"> <button className='btn btn-warning  ' id='button-29' > <a class="navbar-brand text-dark" href="#">superlux car</a></button></Link>
         <Link to="userinfo"> <button className='btn btn-warning ' id='button-29'> <a class="navbar-brand text-dark" href="#">User Info</a></button> </Link>
        </div>
      </nav>
      <div><Outlet></Outlet></div>
    </div>
    }

}
export default UserDashbord