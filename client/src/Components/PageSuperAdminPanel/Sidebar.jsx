import React, { useState } from 'react';
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import logo from '../assets/img/mezghena-logo.svg';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";

function SidebarComponent() {
  const [activeLink, setActiveLink] = useState('/home');

  return (
    <div className="fixed left-0 top-0 h-full bg-bg-toggle w-[280px] text-white">
      <div className="flex flex-col h-full">
        <div className="flex items-center p-10">
          <img src={logo} alt="Mezghena logo" className="w-12 h-auto mr-4" />
          <p className="text-lg font-bold">Mezghena</p>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-4 mt-5">
            <Link to='/home' onClick={() => setActiveLink('/home')}>
              <SidebarItem icon={IoMdHome} active={activeLink === '/home'}>
                <p className='pl-2'> Home</p>
              </SidebarItem>
            </Link>

            <Link to='/courseList' onClick={() => setActiveLink('/courseList')}>
              <SidebarItem icon={FaUserCog} active={activeLink === '/courseList'}>
                <p className='pl-2'>Supervisors</p>
              </SidebarItem>
            </Link>
            
            <Link to='/settings' onClick={() => setActiveLink('/settings')}>
              <SidebarItem icon={FaGraduationCap} active={activeLink === '/settings'}>
                <p className='pl-2'>Teachers</p>
              </SidebarItem>
            </Link>
            
            <Link to='/courseList' onClick={() => setActiveLink('/courseList')}>
              <SidebarItem icon={FaUserEdit} active={activeLink === '/courseList'}>
                <p className='pl-2'>Courses</p>
              </SidebarItem>
            </Link>
            
            <Link to='/settings' onClick={() => setActiveLink('/settings')}>
              <SidebarItem icon={IoMdSettings} active={activeLink === '/settings'}>
                <p className='pl-2'>Settings</p>
              </SidebarItem>
            </Link>
          </div>

          <div className="mt-auto py-4 text-second-color">
            <Link to='/signout' onClick={() => setActiveLink('/signout')}>
              <SidebarItem icon={FaSignOutAlt} active={activeLink === '/signout'}>
                Sign Out
              </SidebarItem>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

const SidebarItem = ({ icon: Icon, active, children }) => {
  return (
    <div className={`flex items-center gap-2 p-4 ${active ? 'bg-gradient-to-r from-second-color/80 ml-2 text-white' : 'hover:bg-gradient-to-r from-second-color hover:text-white'} rounded`}>
      <Icon className="w-6 h-6" />
      <span>{children}</span>
    </div>
  );
};

export default SidebarComponent;
