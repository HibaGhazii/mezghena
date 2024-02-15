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

        <div className='mt-10 p-6 shadow-lg rounded'>
        
          <div className='flex'> 
            <button className='bg-first-color flex items-center gap-2 text-white px-8 py-2 rounded-[10px]'><BiMenuAltLeft className='h-5 w-5'/> Filter</button>
            <div className='flex gap-2 items-center rounded-[5px]'>
              
              <input type="text" placeholder='Search Course'
                className='ml-4 border-none h-[50px] w-[1080px] outline-none rounded-[10px] placeholder:text-[14px] leading-[20px] font-normal '
              /> 
              <p><CiSearch className='text-bg-toggle w-6 h-6 cursor-pointer absolute top-[230px] right-36 z-0'/></p>
            </div>
            
          </div>

          <div className='flex justify-between mt-5 items-center'>
              <p className='text-gray-500'>Displaying 6 out of 10 courses</p>
              <div className='flex gap-2 text-gray-400'>
                <p className='text-gray-500'>Sort by</p>
                <button>Course</button>
                <button>Earnings</button>
                <button>Sales</button>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseList
