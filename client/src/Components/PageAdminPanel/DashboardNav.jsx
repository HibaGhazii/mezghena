import React from 'react'
import { CiSearch } from "react-icons/ci";
import TurnOnOff from './TurnOnOff'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import profile from '../assets/img/card.png';

const DashboardNav = () => {
  return (

        <div className="flex justify-between">
            <div className='flex items-center rounded-[5px]'>
                <input type="text" className='border border-light-blue/50 h-[50px] outline-none pl-10 w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal ' placeholder='Search Class, Documents, Activities... '/>
                <CiSearch className='text-bg-toggle w-6 h-6 absolute translate-x-3 cursor-pointer'/>
            </div>
            
            <div className='flex items-center gap-4'>
                
                <TurnOnOff/>
                
                <div>
                    <IoMdNotificationsOutline className=' w-7 h-7 mt-1 text-bg-toggle cursor-pointer'/>
                    <p className='bg-red-600 px-1 absolute translate-x-3 -translate-y-[30px] rounded-full text-xs text-white font-semibold text-center'>1</p>
                </div>
                
                <div>
                    <IoSettingsOutline className='w-6 h-6 mt-1 text-bg-toggle cursor-pointer'/>
                </div>

                <div>
                    <img src={profile} className='mt-1 rounded-lg w-12 h-12 cursor-pointer' />
                </div>
                
            </div>
      
        </div>
  )
}

export default DashboardNav
