import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../navfotos';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#fafafa]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
      {/**  <Icon styles="w-[52px] h-[52px] bg-[#4c99e6]" imgUrl={logo} />  */}
        </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#3f131333] rounded-[20px] w-[76px] py-4 mt-12 shadow-secondary">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        {/** <Icon styles="bg-[#ffffffff] shadow-secondary" imgUrl={sun} /> */}
      </div>
    </div>
  )
}

export default Sidebar