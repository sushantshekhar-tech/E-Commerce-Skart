import React from 'react'
import Navbar from '../features/navbar/Navbar'
import UserProfile from '../features/user/components/UserProfile'
import Footer from './Footer'

const UserProfilePage = () => {
  return (
    <div>
        <Navbar>
            <h1 className='text-5xl mx-auto'>My Profile</h1>
            <UserProfile></UserProfile>
        </Navbar>
        <Footer></Footer>
    </div>
  )
}

export default UserProfilePage