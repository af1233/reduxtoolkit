import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/UserSlice";
 
export const DeleteAllUser = () => {
  const dispatch=useDispatch();

  const DeleteAll=()=>{
    dispatch(clearAllUsers())
  }

  return <div>
    <button style={{cursor:'pointer',padding:'10px 12px', background:'black', color:'white',fontSize:'25px'}}  
    onClick={DeleteAll}
    >DeleteAllUser</button>
  </div>;
};
