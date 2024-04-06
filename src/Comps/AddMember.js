import {useState} from 'react';
import "./styles.css";
import { useNavigate } from 'react-router-dom';

export const AddMember = () => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [midName, setMidName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const handleProceed = (event) => {
        event.preventDefault();
        navigate("/admin/addFam/details");
        console.log({
            username,
            firstName,
            midName,
            lastName,
        });


    }

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-color-addmember'>
        <div className=" form-box-shadow bg-white w-9/12  sm:w-3/12 sm:min-w-[300px]  flex flex-col justify-center items-center gap-4 rounded-md pb-4 pt-4">

            <h1 className=" text-xl sm:text-2xl font-bold whitespace-nowrap">Add Member</h1>
            
            <form className= " w-8/12 flex flex-col items-center gap-4" onSubmit={handleProceed}>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}
                className=" w-full h-10 rounded-lg border-2 p-2 border-slate-300 outline-none"
                // required
                ></input>
                <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => {setFirstName(event.target.value)}}
                className=" w-full h-10 rounded-lg border-2 p-2 border-slate-300 outline-none"
                // required
                ></input>
                <input
                type="text"
                placeholder="Middle Name"
                value={midName}
                onChange={(event) => {setMidName(event.target.value)}}
                className=" w-full h-10 rounded-lg border-2 p-2 border-slate-300 outline-none"
                ></input>
                <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => {setLastName(event.target.value)}}
                className=" w-full h-10 rounded-lg border-2 p-2 border-slate-300 outline-none"
                // required
                ></input>
                <button 
                className=" bg-color-addmember-btn rounded-lg w-full h-10 text-white font-semibold">Proceed</button>
            </form>
        </div>
        </div>
    );
}