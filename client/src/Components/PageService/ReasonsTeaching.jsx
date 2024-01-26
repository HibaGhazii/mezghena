import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";

const ReasonsTeaching = () => {
  return (
    <div className='mt-14'>
        <div className='flex flex-col items-center'>
            <div className='text-center'>
                <p className='text-bg-toggle font-bold text-4xl'>Reasons to start teaching</p>
                <p className='text-gray-500 mt-1'>Lorem Ipsum is simply dummy text of the printing.</p>
            </div> 
        </div>

        <div className='flex flex-col md:flex-row gap-16 mt-16 text-center justify-center '>
                <div className='flex flex-col bg-first-color/10 shadow-xl rounded-3xl p-5'>
                    <div className='bg-first-color rounded-full p-4 absolute translate-x-[125px] md:translate-x-[150px] '>
                        <HiOutlineDesktopComputer className='text-white w-6 h-6'/>
                    </div>
                    <div className='mt-16'>
                        <p className='text-light-blue font-semibold text-xl'>Create courses</p>
                        <p className='text-gray-500'>Access to question bank of over 2000 questions</p>
                    </div> 
                </div>
{/* /////////////////////////////////////////////////////////////////////////////////// */}
                <div className='flex flex-col bg-first-color/10 shadow-xl rounded-3xl p-5'>
                    <div className='bg-first-color rounded-full p-4 absolute translate-x-[125px] md:translate-x-[150px] '>
                        <HiOutlineDesktopComputer className='text-white w-6 h-6'/>
                    </div>
                    <div className='mt-16'>
                        <p className='text-light-blue font-semibold text-xl'>Create courses</p>
                        <p className='text-gray-500'>Access to question bank of over 2000 questions</p>
                    </div> 
                </div>
{/* ///////////////////////////////////////////////////////////////////////////////////// */}
                <div className='flex flex-col bg-first-color/10 shadow-xl rounded-3xl p-5'>
                    <div className='bg-first-color rounded-full p-4 absolute translate-x-[125px] md:translate-x-[150px] '>
                        <HiOutlineDesktopComputer className='text-white w-6 h-6'/>
                    </div>
                    <div className='mt-16'>
                        <p className='text-light-blue font-semibold text-xl'>Create courses</p>
                        <p className='text-gray-500'>Access to question bank of over 2000 questions</p>
                    </div> 
                </div>
        </div>
    </div>
  )
}

export default ReasonsTeaching
