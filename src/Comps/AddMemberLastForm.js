import { useState } from "react";
import "./styles.css";


export const AddMemberLastForm = () => {

    const [healthStatus, setHealthStatus] = useState(false);
    const [healthDetails, setHealthDetails] = useState("");
    const [occupation, setOccupation] = useState("");

    const [annualIncome, setAnnualIncome] = useState("");


    const handleProceed = (event) => {
        event.preventDefault();

        console.log({
            healthStatus,
            healthDetails,
            occupation,
            annualIncome,
        });
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-admin-page-header">
        <div className=" form-box-shadow bg-white w-9/12  sm:w-3/12 sm:min-w-72  flex flex-col justify-center items-center gap-4 rounded-md pb-4 pt-4">

            <h1 className=" text-lg sm:text-2xl font-bold whitespace-nowrap">Additional Details</h1>
            <form className= " w-8/12 flex flex-col items-center gap-4" onSubmit={handleProceed}>
                <div className=" w-full flex justify-between gap-4">
                    <label htmlFor="illness">Having any illness?</label>
                    <input 
                    type="checkbox" 
                    id="illness" 
                    checked={healthStatus}
                    onChange = {(event) => {
                        setHealthStatus(event.target.checked);
                    }}></input>
                </div>
                <input
                type="text"
                placeholder="Health Details"
                value={healthDetails}
                onChange={(event) => {setHealthDetails(event.target.value)}}
                className=" w-full h-10 rounded-lg border-2 p-2 border-slate-400"
                style={{
                    display: healthStatus ? "block" : "none",
                }}
                required
                ></input>
                
                <select 
                className=" w-full flex h-10 rounded-lg border-2 border-slate-400 px-2 text-sm bg-transparent"
                value={occupation}
                onChange={(event) => {setOccupation(event.target.value)}}
                required>
                    <option value="" defaultValue>Select an option</option>
                    <option value="Occu 1">Occu 1</option>
                    <option value="Occu 2">Occu 2</option>
                    <option value="Occu 3">Occu 3</option>
                </select>

                <input
                type="number"
                min={0}
                step={50000}
                placeholder="Annual Income"
                value={annualIncome}
                onChange={(event) => {setAnnualIncome(event.target.value)}}
                className=" w-full h-10 rounded-lg border-2 p-2 border-slate-400"
                required></input>
                <button 
                className=" bg-color-addmember-btn rounded-lg w-full h-10 text-white font-semibold mt-4">Proceed</button>
            </form>
        </div>
        </div>
    );
}