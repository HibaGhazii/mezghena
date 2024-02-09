import React from 'react';
import { FaGraduationCap, FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import logo from '../assets/img/mezghena-logo.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SidebarComponent() {
  return (
    <div className="fixed left-0 top-0 h-full bg-bg-toggle w-[280px] text-white">
      <div className="flex flex-col h-full">
        <div className="flex items-center p-10">
          <img src={logo} alt="Mezghena logo" className="w-12 h-auto mr-4" />
          <p className="text-lg font-bold">Mezghena</p>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex flex-col gap-4 mt-5">
            <Link to='/home'>
              <SidebarItem icon={IoMdHome} >
                <p className='pl-2'> Home</p>
              </SidebarItem>
            </Link>

            <Link to='/students'>
              <SidebarItem icon={FaGraduationCap} >
                <p className='pl-2'>Students</p>
              </SidebarItem>
            </Link>
            
            <Link to='/courseList'>
              <SidebarItem icon={FaUserEdit} >
              <p className='pl-2'>Courses</p>
              </SidebarItem>
            </Link>
            
            <Link to='settings'>
              <SidebarItem icon={IoMdSettings} >
              <p className='pl-2'>Settings</p>
              </SidebarItem>
            </Link>
          </div>

          <div className="mt-auto py-4 text-second-color">
            <Link to='/signout'>
              <SidebarItem icon={FaSignOutAlt} >
                Sign Out
              </SidebarItem>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

const SidebarItem = ({ icon: Icon, href, children }) => {
  return (
    <a href={href} className="flex items-center gap-2 p-4 hover:bg-gradient-to-r from-second-color hover:text-white rounded">
      <Icon className="w-6 h-6" />
      <span>{children}</span>
    </a>
  );
};

export default SidebarComponent;
