import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { ConnectWallet } from "@thirdweb-dev/react";

import { logo, menu, search, thirdweb,} from '../navfotos'
import { navlinks } from '../constants';


function Navbar() {
const navigate = useNavigate();
const [isActive, setIsActive] = useState
('dashboard');
const [toggleDrawer, setToggleDrawer] = useState
(false);




  return (
<div className='flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6'>
<div className='lg:flex-1 flex flex-row max-w-[458px] py-4 pl-4 pr-2 h-[52px] bg-[#ffffffff] rounded-[100px] shadow-2xl'>

 <input type="text" placeholder='Buscar Propiedades' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none shadow-secondary' />


{/** <div className='w-[72px] h-full rounded-[20px] bg-[#fff] flex justify-center items-center cursor-pointer'>
<img  src={search} alt="search" className='w-[15px] h-[15px] object-contain'/>
</div>*/}
</div>



{/** <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "left",
              }}
            />
          </div>
*/}
  <div className='sm:flex hidden flex-row justify-end gap-4'>
  {/** <CustomButton 
    btnType="button"
    title={address ? 'Create Pool' : 'Conect'}
    styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
   handleClick={() => {
    if(address) navigate('Create Pool')
    else 'connect()'
   }}

  />
*/}
<ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
<Link to="/Profile">
{/**<div className='w-[40px] h-[52px] rounded-full bg-[#f3f3] flex justify-center items-center cursor-pointer'>
  <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain'/>
</div> */}
</Link>
  </div>


  {/**Navegacion para Moviles */}
  <div className="sm:hidden flex justify-between items-center relative bg-transparent">
  <div className='w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer'>
  <img src={thirdweb} alt="user" className='w-[60%] h-[60%] object-contain'/>
</div>

<img 
  src={menu}
  alt="menu"
  className='w-[34px] h-[34px] object-contain cursor-pointer'
  onClick={() => setToggleDrawer((prev) => !prev)}
/>
<div className={`absolute top-[60px] right-0 
left-0 bg-[#1c1c24] z-10 shadow-secondary py-4
${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
<ul className='mb-4'>
 {navlinks.map((link) => (
  <li
  key={link.name}
  className={`flex p-4 ${isActive === link.name && 'bg-[#fafafa]'}`}
  onClick={() => {
    setIsActive(link.name);
    setToggleDrawer(false);
    navigate(link.link);
  }}
  >
  <img 
    src={link.imgUrl}
     alt={link.name}
     className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
       />
       <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc]' : 'text-[#808191]'}`}>
        {link.name}
        </p>
        

  </li>
 ))}
</ul> 
<div className='flex mx-4'>
<ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
</div>


</div>

  </div>

  </div>
  )
}

export default Navbar