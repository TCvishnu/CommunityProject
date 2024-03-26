import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import "./styles.css";

export default function NameForm() {
    const [fsName, setFsName] = useState("");
    const [mdName, setMdName] = useState("");
    const [lsName, setLsName] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/admin/addUser/details", {state: {fName: fsName, mName: mdName, lName: lsName}})
    }
    
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-admin-page-header overflow-y-auto'>
        <form className='w-8/12 max-h-screen overflow-y-auto bg-white flex flex-col items-center gap-4 sm:w-5/12 md:w-4/12 lg:w-3/12 py-12 rounded-sm
        form-shadow'
        onSubmit={handleSubmit}>
            <h1 className='text-lg font-semibold sm:text-2xl'>Add User</h1>
            <input placeholder='FirstName'
            onChange={(e)=>{setFsName(e.target.value)}}
            // required
            className='w-10/12 outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10 text-sm shrink-0' />

            <input placeholder='MiddleName'
            onChange={(e)=>{setMdName(e.target.value)}}
            className='w-10/12 outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10 text-sm shrink-0' />
            
            <input placeholder='LastName'
            onChange={(e)=>{setLsName(e.target.value)}}
            // required
            className='w-10/12 outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10 text-sm shrink-0' />

            <input type='submit' value="Proceed"
            className='bg-login-blue w-10/12 h-8 sm:h-10 sm:mt-2 rounded-lg text-white text-sm
            flex flex-row items-center justify-center'/>

        </form>
        
    </div>
  )
}
