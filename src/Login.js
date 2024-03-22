import React, {useState} from 'react';
import "./styles.css"
import ClosedEye from './icons/closeEye';
import Eye from './icons/eye';

export default function Login() {

  const [displayPass, setDisplayPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [curPage, setCurPage] = useState("userLogin");

  return (
    <div className='w-screen h-screen bg-darkwhite flex flex-col items-center justify-center'>
        <div className='w-10/12 max-h-screen sm:w-5/12 md:w-4/12 lg:w-3/12 bg-white flex flex-col justify-start items-center gap-12
        form-shadow overflow-y-auto'>

            <header className='flex flex-col gap-2 w-full items-center mt-4'>
                <h1 className='text-xl font-semibold'>Welcome Back</h1>
                <h2 className='text-lg font-medium'>Login as a User</h2>
            </header>

            <form className='w-full flex flex-col items-center gap-4'>
              <input placeholder='Username' 
                  onChange={(e)=>{setUsername(e.target.value)}}
                  value={username}
                  className='outline-none bg-transparent border-2 border-gray-300 w-10/12 h-10
              rounded-xl pl-4'/>
              <div className='w-10/12 relative'>
                    {displayPass && <input placeholder='Password' 
                    type="text" 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                    className='outline-none bg-transparent border-2 border-gray-300 w-full
                    rounded-xl pl-4  h-10'/>
                    }
                    {!displayPass && <input placeholder='Password' 
                    type="password" 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                    className='outline-none bg-transparent border-2 border-gray-300 w-full
                    rounded-xl pl-4 h-10'/>
                    }
                    {!displayPass && <ClosedEye styling="absolute right-3 top-2" onChangeDisplay={() => {setDisplayPass(true)}} />}
                    { displayPass && <Eye styling="absolute right-3 top-2" onChangeDisplay={()=>{setDisplayPass(false)}}/>}      
                </div>
                <input type='submit' value="Login"
                className='w-10/12 bg-login-blue h-10 rounded-sm text-white'/>
            </form>
            
            <div className='w-10/12 h-0.5 shrink-0 bg-gray-200'></div>

            <button className='w-10/12 text-sm bg-login-blue text-white h-10 rounded-sm shrink-0'
            onClick={()=>{setCurPage("adminLogin")}}> Login As Branch Admin </button> 

        </div>
    </div>
        
  )
}
