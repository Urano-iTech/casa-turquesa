import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import CasasDetalles from "./pages/CasasDetalles";
import CreatePool from "./pages/CreatePool";
import Profile from "./pages/Profile";
import { Claim } from "./pages";

const App = () => {
  return (
   <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
    <div className="sm:flex hidden mr-10 relative">
     <Sidebar />
   </div>
   <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
    <Navbar />
   
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/CasasDetalles" element={<CasasDetalles />} />
    <Route path="/CreatePool" element={<CreatePool />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Claim" element={<Claim />} />
   </Routes>
   
   
   </div>

   </div>
  );
}

export default App
