import React from 'react'
import Navbar from "../features/navbar/Navbar";
import Footer from './Footer';
import UserOrders from '../features/user/components/UserOrders';

export const UserOrderPage = () => {
  return (
<div>
<Navbar>
    <h1 className='mx-auto text-5xl '>My Orders</h1>
    <UserOrders></UserOrders>
</Navbar>
    <Footer></Footer>
</div>
  )
}
