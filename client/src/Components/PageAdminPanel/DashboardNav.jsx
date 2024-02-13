import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import TurnOnOff from './TurnOnOff';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import profile from '../assets/img/card.png';
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

// Dropdown for Notifications
const NotificationDropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <IoMdNotificationsOutline
        className='w-7 h-7 mt-1 text-bg-toggle cursor-pointer'
        onClick={toggleDropdown}
      />
       <p className='bg-red-600 px-1 absolute translate-x-3 -translate-y-[30px] rounded-full text-xs text-white font-semibold text-center'>1</p>
      {isOpen && (
        <div className="absolute right-0 top-10 bg-white border border-gray-200 rounded shadow">
          <p className='font-bold text-2xl text-bg-toggle text-center p-2'>Notifications</p>
          <hr  className='border-2 border-light-blue'/>
          <div className='flex w-[300px]'>
                <div className='bg-red-700 pl-2'>
                </div>
                <div className='ml-4'>
                    <p className='text-gray-500 text-sm'>3 minutes ago</p>
                    <div className='flex items-center gap-2'>
                        <CgProfile className='text-blue-900 w-10 h-10'/>
                        <p>Your profile information has not been synced correctly</p>
                    </div>
                </div>
            </div>
<hr  className='border-2 border-light-blue'/>
            <div className='flex w-[300px]'>
                <div className='bg-green-500 pl-2'>
                </div>
                <div className='ml-4'>
                    <p className='text-gray-500 text-sm'>3 minutes ago</p>
                    <div className='flex items-center gap-2'>
                        <CgProfile className='text-blue-900 w-10 h-10'/>
                        <p>Your profile information has not been synced correctly</p>
                    </div>
                </div>
            </div>
<hr  className='border-2 border-light-blue'/>
            <div className='flex w-[300px]'>
                <div className='bg-yellow-300 pl-2'>
                </div>
                <div className='ml-4'>
                    <p className='text-gray-500 text-sm'>3 minutes ago</p>
                    <div className='flex items-center gap-2'>
                        <CgProfile className='text-blue-900 w-10 h-10'/>
                        <p>Your profile information has not been synced correctly</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

// Dropdown for Settings
const SettingsDropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <IoSettingsOutline
        className='w-6 h-6 mt-1 text-bg-toggle cursor-pointer'
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute right-0 top-10 bg-white border border-gray-200 p-2 rounded shadow">
          <p></p>
          <div>

          </div>
        </div>
      )}
    </div>
  );
};

// Dropdown for Profile
const ProfileDropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <img
        src={profile}
        className='mt-1 rounded-lg w-12 h-12 cursor-pointer'
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className=" absolute right-0 top-14 bg-white border border-gray-200 rounded shadow">
            <div className='flex items-center gap-3 w-80 p-2'> 
                <img src={profile} className='rounded-full w-12 h-12'/>
                <div>
                    <p className='text-bg-toggle font-bold text-xl'>Micheal John</p>
                    <p className='text-sm text-gray-500'>michael.john@gmail.com</p>
                </div>
            </div>
                <hr  className='border-2 border-light-blue'/>

            <div className='flex items-center gap-2 py-2' >
                <CgProfile className='w-6 h-6 text-bg-toggle'/> 
                <button className='font-semibold text-gray-600'>Profile</button>
            </div>
                <hr  className='border-2 border-light-blue'/>

                <Link to='/settings' className='flex items-center gap-2 py-2'>
                    <IoMdSettings className='w-6 h-6 text-bg-toggle'/>
                    <button className='font-semibold text-gray-600'>Settings</button>
                </Link>

                <hr  className='border-2 border-light-blue'/>

            <div className='flex items-center gap-2 py-2'>
                <RiLogoutCircleRLine className='w-6 h-6 text-bg-toggle'/>
                <button className='font-semibold text-gray-600'>Logout</button>
            </div>
        </div>
      )}
    </div>
  );
};

const DashboardNav = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
    setSettingsOpen(false);
    setProfileOpen(false);
  };

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
    setNotificationOpen(false);
    setProfileOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setNotificationOpen(false);
    setSettingsOpen(false);
  };

  return (
    <div className="flex justify-between">
      <div className='flex items-center rounded-[5px]'>
        <input
          type="text"
          className='border border-light-blue/50 h-[50px] outline-none pl-10 w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal '
          placeholder='Search Class, Documents, Activities...'
        />
        <CiSearch className='text-bg-toggle w-6 h-6 absolute translate-x-3 cursor-pointer'/>
      </div>

      <div className='flex items-center gap-4'>
        <TurnOnOff/>
        <NotificationDropdown isOpen={notificationOpen} toggleDropdown={toggleNotification} />
        <SettingsDropdown isOpen={settingsOpen} toggleDropdown={toggleSettings} />
        <ProfileDropdown isOpen={profileOpen} toggleDropdown={toggleProfile} />
      </div>
    </div>
  );
};

export default DashboardNav;
