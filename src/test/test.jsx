    <div className="relative sm:-8 p-4 bg-[#555134] min-h-screen flex flex-row">
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