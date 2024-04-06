import React, { useEffect, useState } from 'react';
import "./styles.css"
import { useNavigate } from 'react-router-dom';

export default function FamilyDetails() {
    const [sex, setSex] = useState("Prefer not to say");
    const [relation, setRelation] = useState("");
    const [isMarried, setIsMarried] = useState("no");
    const [isActiveMem, setIsActiveMem] = useState("no");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/admin/addFam/last");
        
    }

    
  return (
    <div className='w-screen h-screen bg-admin-page-header flex items-center justify-center'>
        <form className='flex flex-col items-center justify-start py-6 bg-white form-shadow
        w-9/12 sm:w-5/12 md:w-4/12 lg:w-3/12 gap-6 rounded-sm max-h-screen overflow-y-auto'
        onSubmit={handleSubmit}>
            <h1 className='text-xl font-medium'>Details</h1>
            <div className='w-9/12 flex flex-col gap-1'>
                <div className='w-full'>
                    <label className='font-medium'>Sex:</label>
                </div>
                <select className='w-full h-10 min-h-10 bg-transparent border-2 rounded-md border-gray-300 px-2 text-sm'
                onChange={e => {setSex(e.target.value)}}>
                    <option value="Prefer not to say" >Prefer not to say</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className='w-9/12 flex flex-col gap-1'>
                <div className='w-full'>
                    <label className='font-medium'>Date of birth:</label>
                </div>
    
                <input type="date"
                className='w-full h-10 min-h-10 rounded-md outline-none px-2 border-2 border-gray-300 text-sm'/>
            </div>
            
            <div className='flex flex-col w-9/12 gap-1'>
                <div className='flex w-full'>
                    <label className='font-medium text-sm'>Member's relation with the user:</label>
                </div>
                <select className='w-full h-10 min-h-10 bg-transparent border-2 rounded-md px-2 border-gray-300 text-sm'
                onChange={(e)=>{setRelation(e.target.value)}}
                value={relation}>
                    <option value="">Select an option</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Grandfather">Grandfather</option>
                    <option value="Grandmother">Grandmother</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Cousin">Cousin</option>
                    <option value="Nephew">Nephew</option>
                    <option value="other">Other</option>
                </select>
                {relation === "other" &&
                <input type="text" 
                className='w-full outline-none h-10 border-2 border-gray-300 px-2 text-sm rounded-md'
                />}
            </div>
            
            
            <div className='w-9/12 flex justify-between items-center'>
                <label className='font-medium'>Is a married person?</label>
                <input type='checkbox'
                onChange={(e)=>{setIsMarried(e.target.checked ? "yes":"no")}}/>
            </div>

            <div className='w-9/12 flex justify-between items-center'>
                <label className='font-medium'>Is an active member?</label>
                <input type='checkbox'
                onChange={(e)=>{setIsActiveMem(e.target.checked ? "yes":"no")}}/>
            </div>

            <input type='submit' value="Proceed"
            className='w-9/12 h-10 bg-admin-page-blue rounded-md mt-6 text-white text-sm min-h-10'/>
        </form>
    </div>
  )
}


// http://localhost:3000/admin/addFam/details