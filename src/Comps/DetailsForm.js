import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RemainingDetails = () => {
    const navigate = useNavigate();


    const [sex, setSex] = useState("not specified");
    const [dateOfJoin, setDateOfJoin] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    
    const [isActive, setActiveStatus] = useState(false);
    const [address, setAddress] = useState("");

    

    const maxDateData = new Date();
    const maxDateOfBirth = maxDateData.toISOString().split('T')[0];
    maxDateData.setDate(maxDateData.getDate() + 1);
    const maxJoinDate = maxDateData.toISOString().split('T')[0];
    
    
    const handleProceed = (event) => {
        event.preventDefault();
        navigate("/admin/addUser/credentials");
        
        if (dateOfBirth !== "" && dateOfJoin !== "" && address !== "") {

            
            console.log({
                sex: sex,
                date_of_join: dateOfJoin,
                date_of_birth: dateOfBirth,
                isactive: isActive,
                address: address,
            });
        }
        
    }

    return (
        <div className=' w-screen h-screen flex justify-center items-center bg-admin-page-header'>
            <div className=" w-8/12 rounded-md h-auto lg:w-3/12 sm:w-5/12 form-shadow bg-white
        flex flex-col items-center gap-4">
            <form className=" w-full h-full flex flex-col items-center gap-4" onSubmit={handleProceed}>
            <h1 className='text-lg mt-8 font-semibold sm:text-2xl'>Details</h1>
                
                <div className=" w-9/12">
                    <label><span className=" mr-4">Sex</span></label>
                    <span className=" mr-2">Male</span>
                    <input 
                    type="radio" 
                    name="sex-options" 
                    value="male" 
                    onChange={(event) => {
                        setSex(event.target.value);
                    }}></input>
                    <span className=" ml-2 mr-2">Female</span> <input type="radio" name="sex-options" value="female" onChange={(event) => {
                        setSex(event.target.value);
                    }}></input>
                </div>
                
                <div className=" w-9/12 flex flex-col gap-4">
                    
                    <label htmlFor="dateOfJoin">Date of Join</label>
                    <input placeholder='Date of joining'
                    id="dateOfJoin"
                    type="date"
                    className='w-full outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10'
                    
                    max={maxJoinDate}
                    value={dateOfJoin}
                    onChange={(event) => {
                        setDateOfJoin(event.target.value);
                    }}
                    // required
                    />
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input placeholder='Date of birth'
                    type="date"
                    id="dateOfBirth"
                    className='w-full outline-none border-2 border-gray-300 rounded-lg pl-2 h-8 sm:h-10'
                    value={dateOfBirth}

                    max={maxDateOfBirth}
                    onChange={ (event) => {
                        setDateOfBirth(event.target.value);
                    }}
                    // required
                    />
                    <div className=" flex items-center">
                        <label><span className=" mr-4">Is Active Member ?</span></label>
                        <input 
                        type="checkbox" 
                        className=" w-4 h-4"
                        checked={isActive}
                        onChange={(event) => {
                            setActiveStatus(event.target.checked);
                        }}
                        ></input>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Address"
                    className="w-full outline-none border-2 border-gray-300 rounded-lg pl-2 h-10 sm:h-10"
                    value={address}
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}
                    // required
                    />
                    <input 
                    type="submit"
                    value="Proceed" 
                    className=' w-full bg-login-blue text-white h-10 rounded-xl sm:h-10 mb-10'/>
                </div>
                </form>
            </div>
           

            
            
        </div>
    );
}

export default RemainingDetails;