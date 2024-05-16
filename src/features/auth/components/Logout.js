import React, { useEffect } from 'react'
import { selectLoggedInUser, signOutAsync } from '../authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    const user = useSelector(selectLoggedInUser);

    const dispatch =useDispatch()
    useEffect(()=>{
       dispatch(signOutAsync());
    },[])

    //but useEffect runs after render , so we will have to delay navigate part
  return (
    <>
{!user &&   <Navigate to="/login" replace={true}></Navigate>}
    </>
  )
}

export default Logout