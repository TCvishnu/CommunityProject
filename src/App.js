import Login from "./Comps/Login";
import AdminHome from "./Comps/AdminHome";
import NameForm from "./Comps/NameForm";
import DetailsForm from "./Comps/DetailsForm";
import LastForm from "./Comps/LastForm";
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
          </Routes>
        </main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
