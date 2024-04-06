import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./styles.css";
import AddUser from "./icons/addUser";
import Logout from "./icons/logout";

export default function AdminHome() {
    const location = useLocation();
    const [adminName, setAdminName] = useState(location.state?location.state.user.firstName + " " + location.state.user.lastName : null);
  return (
    <div className=' w-screen h-screen flex flex-col sm:flex-row justify-center items-center'>
        {!location.state && <div className='w-screen h-screen max-h-screen overflow-y-auto flex flex-row items-center justify-center gap-8'>
            <div className='bg-black w-2 h-2 rounded-full ball'>
            </div>

            <div className='bg-black w-2 h-2 rounded-full ball delay250'>
            </div>

            <div className='bg-black w-2 h-2 rounded-full ball delay500'>
            </div>
        </div>}

        {location.state && 
        <div className='w-screen h-screen flex flex-col sm:flex-row justify-center sm:justify-start items-center'>
            <header className='hidden w-full h-1/6 sm:w-7/12 sm:h-screen max-h-screen overflow-y-auto sm:flex flex-col items-center justify-center
            text-xl sm:text-3xl font-medium bg-admin-page-header'>
                Welcome back {adminName}
            </header>
            <main className='w-full h-screen max-h-screen overflow-y-auto sm:w-5/12 bg-admin-page-blue flex flex-col items-center justify-center gap-2'> 
                <h1 className='sm:hidden font-peach fixed top-4 text-3xl'>Welcome Back</h1>
                <h2 className="sm:hidden font-peach  fixed top-16 text-2xl">{adminName}</h2>

                <Link to="/admin/addUser" className='admin-page-btn w-5/12 h-10 font-semibold text-white rounded-md
                flex flex-row items-center justify-center gap-2 duration-200 shrink-0'> <AddUser styling=""/> Add User</Link>

                <Link to="/admin/addFam"className='admin-page-btn w-5/12 h-10 font-semibold text-white rounded-md
                flex flex-row items-center justify-center gap-2 duration-200 shrink-0'> Add Family Details</Link>

                <button className='admin-page-btn w-5/12 h-10 font-semibold text-white rounded-md
                flex flex-row items-center justify-center gap-2 duration-200 shrink-0'></button>
                <Logout styling="fixed right-4 top-4"/>      
            </main>
            
        </div>
        }
    </div>

  )
}
