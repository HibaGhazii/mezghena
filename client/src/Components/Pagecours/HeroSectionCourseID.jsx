import React from 'react'
import { HiHome } from 'react-icons/hi'; 
import { Link } from 'react-router-dom';
import image from '../assets/img/card.png'
import { IoPlayCircle   } from "react-icons/io5";
import { MdOutlineWatchLater,MdOutlinePlayCircleOutline  } from "react-icons/md";
import { IoIosCode,IoIosArrowForward } from "react-icons/io";
import { FaRegFileLines } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsDownload,BsFillSendFill } from "react-icons/bs";
import { HiArrowPath } from "react-icons/hi2";
import { PiCertificateLight } from "react-icons/pi";

const HeroSectionCourseID = () => {
  return (
    <div className="text-white flex flex-col md:flex-row pb-12 pt-24 md:pt-32 bg-[url('../src/Components/assets/img/Hero-Section.png')] rounded-b-[60px] bg-cover">
      
        <div className='md:w-[60%] flex flex-col gap-5 pt-10'>
            <div className='flex ml-10 md:ml-36'>
                <div className="flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 font-normal">
                        <li>
                        <Link to="/" className="text-second-color flex items-center">
                                <p>Home</p> 
                                <IoIosArrowForward className='mt-1'/>
                        </Link>
                        </li>
                        <li>
                        <Link to="/courses" className="text-second-color flex items-center">
                            <p>Courses</p> 
                            <IoIosArrowForward className='mt-1'/>
                        </Link>
                        </li>
                        <li className=''>programming language</li>
                    </ol>
                </div>
            </div>

            <div className='flex flex-col mx-10 md:ml-36 gap-3'>
                <p className='text-4xl font-bold text-light-blue'>Learn Python from scratch course</p>
                <p className='text-sm'>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p>
                <div className='flex gap-6 text-sm'>
                    <p>Made by <span className='text-second-color'>Gallen Collignon</span></p>
                    <p>Participants: <span className='text-second-color'>3345</span></p>
                </div>
            </div>
        </div>

        <div className="mt-12 ml-14 md:mt-0 md:w-[38%] md:absolute right-0 top-40 shadow-2xl">
            <div className='bg-white w-80 h-auto rounded-[35px]'> 
                <div className=''> 
                    <img src={image} className='h-48 w-80 rounded-t-[35px] brightness-50'/>
                    <IoPlayCircle  className=' cursor-pointer h-16 w-16 text-white absolute transform translate-x-32 -translate-y-32'/>
                    <p className='text-center -translate-y-10 font-bold text-lg font-Poppins'>Show resume of this course</p> 
                </div>
                
                <div className='mx-6 -mt-4 flex flex-col items-left gap-1'>
                    <p className='text-light-blue font-bold text-3xl'>$98</p>
                    <p className='text-dark-blue font-bold text-xl'>70% <span className='text-676767'>discount</span></p>
                    <div className='text-red-700 mt-2 flex items-center text-xs gap-2'>
                        <MdOutlineWatchLater className='h-8 w-8'/>
                        <p>You have <span className='font-bold'>1 day</span> left to take advantage of this price!</p>
                    </div>

                    <button className='bg-first-color w-full h-12 rounded-lg text-lg font-semibold mt-8'>Add to cart</button>
                    <button className='bg-second-color w-full h-12 rounded-lg text-lg font-semibold '>Buy now</button>
                
                    <p className='text-center text-gray-800 text-xs mt-6'>30-day satisfaction or money-back guarantee</p>
                </div>

                <div className='text-black mt-7 mx-6 text-xs flex flex-col gap-2'>
                    <p className='font-bold text-lg'>This course contains:</p> 
                    
                    <div className='flex items-center gap-1'> 
                        <MdOutlinePlayCircleOutline  className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>30-day satisfaction or money-back guarantee</p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <IoIosCode className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>2 coding exercises</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <FaRegFileLines  className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>Exercises</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <CiCircleQuestion className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>2 Practical exercises</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <AiOutlineFileSearch className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>14 articles</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <BsDownload className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>261 resources to download</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <HiArrowPath className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>Unlimited access</p>
                    </div>

                    <div className='flex items-center gap-1 mb-6'> 
                        <PiCertificateLight className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>Certifcate at the end of the course</p>
                    </div>

                    
                    <button className='w-full text-bg-toggle flex items-center justify-center gap-2 border border-first-color h-12 rounded-lg text-lg font-semibold mb-8'>Share <BsFillSendFill className='mt-1'/></button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSectionCourseID
