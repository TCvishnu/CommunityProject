import React, {useState} from 'react';
import ClosedEye from './icons/closeEye';
import Eye from './icons/eye';
import Login from './Login';
import {useNavigate} from "react-router-dom"

export default function AdminLogin() {

  const [displayPass, setDisplayPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [curPage, setCurPage] = useState("adminLogin");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/users?skip=0&limit=100")
    .then(response => response.json())
    .then(json => {
        json.users.forEach(user => {
            if (user.username === username && user.password === password){
                navigate("/admin", {state: {user}});
            }
        });
    })
    }

  return (
    <div className='w-screen h-screen bg-admin-page-header flex flex-col items-center justify-center'>
        {curPage === "adminLogin" &&  <div className='py-12 rounded-sm w-9/12 max-h-screen sm:w-5/12 md:w-4/12 lg:w-3/12 bg-white flex flex-col justify-start items-center gap-12
         form-shadow overflow-y-auto'>

            <header className='flex flex-col gap-2 w-full items-center'>
                <h1 className='text-xl font-medium text-stone-800'>Welcome back</h1>
                <h2 className='text-sm font-normal text-stone-400'>Login as an Admin</h2>
            </header>

            <form className='w-full flex flex-col items-center gap-4' onSubmit={handleLogin}>
              <input placeholder='Username' 
                  onChange={(e)=>{setUsername(e.target.value)}}
                  value={username}
                  className='outline-none bg-transparent border border-gray-300 w-10/12 h-10
              rounded-xl pl-4'
              required/>
              <div className='w-10/12 relative'>
                    {displayPass && <input placeholder='Password' 
                    type="text" 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                    className='outline-none bg-transparent border border-gray-300 w-full
                    rounded-xl pl-4  h-10'
                    required/>
                    }
                    {!displayPass && <input placeholder='Password' 
                    type="password" 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                    className='outline-none bg-transparent border border-gray-300 w-full
                    rounded-xl pl-4 h-10'
                    required/>
                    }
                    {!displayPass && <ClosedEye styling="absolute right-3 top-2" onChangeDisplay={() => {setDisplayPass(true)}} />}
                    { displayPass && <Eye styling="absolute right-3 top-2" onChangeDisplay={()=>{setDisplayPass(false)}}/>}      
                </div>
                <input type='submit' value="Login"
                className='w-10/12 bg-login-blue h-10 rounded-lg text-white'/>
            </form>
            <hr className='w-1/3 bg-stone-200'></hr>

            <button className='w-10/12 text-sm bg-darker-blue text-white h-10 rounded-lg shrink-0'
            onClick={()=>{setCurPage("userLogin")}}> Login as a user</button> 

        </div>}
        {curPage === "userLogin" && <Login />}
    </div>
        
  )
}
