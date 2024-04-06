import Login from "./Comps/Login";
import AdminHome from "./Comps/AdminHome";
import NameForm from "./Comps/NameForm";
import DetailsForm from "./Comps/DetailsForm";
import LastForm from "./Comps/LastForm";

import { AddMember } from "./Comps/AddMember";
import FamilyDetails from "./Comps/FamilyDetails";
import { AddMemberLastForm } from "./Comps/AddMemberLastForm";
import SuperAdminHome from "./Comps/SuperAdminHome";
import "./Comps/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/addUser" element={<NameForm />} />
            <Route path="/admin/addUser/details" element={<DetailsForm />} />
            <Route path="/admin/addUser/credentials" element={<LastForm />} />

            <Route path="/admin/addFam" element={<AddMember />} />
            <Route path="/admin/addFam/details" element={<FamilyDetails />} />
            <Route path="/admin/addFam/last" element={<AddMemberLastForm />} />
            <Route path="/superAdmin" element={<SuperAdminHome />} />
          </Routes>
        </main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
