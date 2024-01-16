import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';


const Displayusers = () => {
   const dispatch=useDispatch();
    const userdata=useSelector((state)=>{
          return state.users;
         
    }); 
    console.log(userdata);

    const deleteuser=(id)=>{
        dispatch(removeUser(id))
    }
  return (
    <div>
    {
        userdata.map((user,id)=>{
            return <li key={id} style={{background:"black", color:'white', padding:"10px 14px", margin:"10px 0px",display:'flex', justifyContent:'space-between'}}>
                <h2>  {user}</h2>
                <button onClick={()=>deleteuser(id)}>
                    <MdDelete style={{fontSize:'25px', color:'red'}}/>
                </button>
            </li>
        })
    }
    </div>
  )
}

export default Displayusers