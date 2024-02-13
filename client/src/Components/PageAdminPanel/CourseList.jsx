import React from 'react'
import DashboardNav from './DashboardNav'
import { BiMenuAltLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const CourseList = () => {
  return (
    <div className="pl-[340px] mr-[100px] mt-5">
      <DashboardNav/> 

      <div>

        <div className='flex justify-between items-center mt-10'>
          <p className='text-bg-toggle text-4xl font-bold'>Manage Courses</p>
          <button className='rounded-3xl bg-first-color text-white px-8 py-2'>Add Course</button>
        </div>

        <div className='mt-4'> 
          <button className='bg-first-color rounded flex items-center gap-2 text-white px-8 py-2'><BiMenuAltLeft className='h-5 w-5'/> Filter</button>
          <div className='flex items-center rounded-[5px]'>
            
            <input
              type="text"
              className='border border-light-blue/50 h-[50px] outline-none pl-10 w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal '
              placeholder='Search Class, Documents, Activities...'
            />
            <CiSearch className='text-bg-toggle w-6 h-6 absolute translate-x-3 cursor-pointer'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CourseList
