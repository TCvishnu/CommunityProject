import React, {useState} from 'react';
import "./styles.css";
import Eye from './icons/eye';
import ClosedEye from './icons/closeEye';

export default function LastForm() {
    const [displayPass, setDisplayPass] = useState(false);
    const [addUsername, setAddUsername] = useState("");
    const [addPassword, setAddPasswrod] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-admin-page-header'>
        <form className='w-7/12 rounded-sm sm:w-3/12 form-shadow bg-white flex flex-col items-center justify-start gap-8
        overflow-y-auto py-8 max-h-screen'
        onSubmit={handleSubmit}>
            <h1 className='text-lg font-semibold'>Set Username & Password</h1>
            <div className='w-full flex flex-col justify-center items-center gap-2'>
                <input placeholder='Username'
                    // required
                    className='w-10/12 outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10 text-sm'
                    onChange={(e)=> {setAddUsername(e.target.value)}}
                    value={addUsername}
                />
                <div className='w-10/12 relative h-8'>
                    {!displayPass && <input placeholder='Password'
                    type="password"
                    // required
                    className='w-full outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10 text-sm'
                    onChange={(e)=> {setAddPasswrod(e.target.value)}}
                    value={addPassword}/>}
                    {displayPass && <input placeholder='Password'
                    type="text"
                    // required
                    className='w-full outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10 text-sm'
                    onChange={(e)=> {setAddPasswrod(e.target.value)}}
                    value={addPassword}/>}
                    {!displayPass && <ClosedEye styling="absolute right-1 sm:right-2 top-1 sm:top-2" onChangeDisplay={() =>{setDisplayPass( prev=> !prev)}} />}
                    { displayPass && <Eye styling="absolute right-1 sm:right-2 top-1 sm:top-2" onChangeDisplay={() => {setDisplayPass(prev => !prev)}} />}
                </div>
                
            </div>
            <input type="submit"
                value="Create"
                className='bg-login-blue w-10/12 h-8 sm:h-10 sm:mt-2 rounded-lg text-white text-sm'/>

        </form>
    </div>
  )
}
