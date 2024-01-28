import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ReasonsTeaching = () => {
  return (
    <div className='mt-14'>
        <div className='flex flex-col items-center'>
            <div className='text-center'>
                <p className='text-bg-toggle font-bold text-4xl'>Reasons to start teaching</p>
                <p className='text-gray-500 mt-1'>Lorem Ipsum is simply dummy text of the printing.</p>
            </div> 
        </div>

        <div className='flex flex-col md:flex-row gap-10 md:gap-0 mt-16 text-center justify-center md:mx-48 '>
                <div className='flex flex-col bg-first-color/10 shadow-xl rounded-3xl p-5 mx-8'>
                    <div className='bg-first-color rounded-full p-4 absolute translate-x-[130px] md:translate-x-[140px] '>
                        <HiOutlineDesktopComputer className='text-white w-6 h-6'/>
                    </div>
                    <div className='mt-16'>
                        <p className='text-light-blue font-semibold text-xl'>Create courses</p>
                        <p className='text-gray-500'>Access to question bank of over 2000 questions</p>
                    </div> 
                </div> 
{/* /////////////////////////////////////////////////////////////////////////////////// */}
                <div className='flex flex-col bg-first-color/10 shadow-xl rounded-3xl p-5 mx-8'>
                    <div className='bg-first-color rounded-full p-4 absolute translate-x-[130px] md:translate-x-[140px] '>
                        <HiOutlineDesktopComputer className='text-white w-6 h-6'/>
                    </div>
                    <div className='mt-16'>
                        <p className='text-light-blue font-semibold text-xl'>Create courses</p>
                        <p className='text-gray-500'>Access to question bank of over 2000 questions</p>
                    </div> 
                </div>
{/* ///////////////////////////////////////////////////////////////////////////////////// */}
                <div className='flex flex-col bg-first-color/10 shadow-xl rounded-3xl p-5 mx-8'>
                    <div className='bg-first-color rounded-full p-4 absolute translate-x-[130px] md:translate-x-[140px] '>
                        <HiOutlineDesktopComputer className='text-white w-6 h-6'/>
                    </div>
                    <div className='mt-16'>
                        <p className='text-light-blue font-semibold text-xl'>Create courses</p>
                        <p className='text-gray-500'>Access to question bank of over 2000 questions</p>
                    </div> 
                </div>
        </div>

        <div className='flex flex-col items-center mt-20'>
            <div className='text-center'>
                <p className='text-bg-toggle font-bold text-4xl'>Become a teacher from today</p>
                <p className='text-gray-500 mt-3'>Lorem Ipsum is simply dummy text of the printing.</p>
                <p className='text-gray-500 mt-1'>Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum</p>
                
                <div className='mt-10'>
                    <Link to='/signup' className='text-white bg-first-color py-3 px-12 rounded-lg font-semibold '>Become a Teacher</Link>
                </div>
            </div> 
        </div>

    </div>
  )
}

export default ReasonsTeaching
