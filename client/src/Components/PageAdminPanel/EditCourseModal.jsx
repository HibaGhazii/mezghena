import React, { useState } from 'react'; 
import DashboardNav from './DashboardNav';
import image from '../assets/img/howitwork.png';
import { FaArrowRotateLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function EditCourseModal() {
    const [videoUrl, setVideoUrl] = useState(''); 

    const lessons = [
        {
            image: image,
            title: "Introduction to Web Development",
            description: "Let's start with a quick tour of Vue's data binding features.",
            price: 123,
            sales: 34,
            level: "Intermediate",
            gulp: "GULP"
          },
          {
            image: image,
            title: "Introduction to Web Development",
            description: "Let's start with a quick tour of Vue's data binding features.",
            price: 123,
            sales: 34,
            level: "Intermediate",
            gulp: "GULP"
          },
          {
            image: image,
            title: "Introduction to Web Development",
            description: "Let's start with a quick tour of Vue's data binding features.",
            price: 123,
            sales: 34,
            level: "Intermediate",
            gulp: "GULP"
          },
          {
            image: image,
            title: "Introduction to Web Development",
            description: "Let's start with a quick tour of Vue's data binding features.",
            price: 123,
            sales: 34,
            level: "Intermediate",
            gulp: "GULP"
          },
          
    ]

  return (
        <div className='pl-[340px] mr-[100px] mt-5'>
            <DashboardNav/>
            <div className='flex justify-between items-center mt-10'>
                <p className='text-bg-toggle text-4xl font-semibold'>Edit Courses</p>
                <button className='rounded-3xl bg-first-color text-white px-8 py-2'>Save</button>
            </div>

           

           <div className='flex gap-10'>
                <div className=' w-[65%]'>
                        <div className='rounded-lg shadow-lg shadow-gray-400 mt-6'>
                            <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Basic informations</p>
                            <hr className='border-gray-400'/>

                            <div className='p-6'>
                                <p>Title</p>
                                <input type="text" placeholder='Basics of React...' className='w-full rounded-xl border border-gray-300 mb-2 my-1'/>
                                
                                <p className='mt-2'>Description</p>
                                <textarea name="description" placeholder='Basics of React...' cols="30" rows="10"  className=' w-full rounded-xl border border-gray-300 my-1'></textarea>
                            </div>
                        </div>

                        <div className='rounded-lg shadow-lg shadow-gray-400 my-6'>
                            <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Lessons</p>
                            <hr className='border-gray-400'/>

                            <div className='p-6'>
                                <Link to='/addlesson' className='bg-first-color text-white rounded-3xl px-6 py-1'>Add lesson + </Link>
                                <div className='mt-4'> 
                                    {lessons.map((lesson, index) => (
                                        <div key={index} className='px-5 flex justify-between items-center shadow-lg rounded-xl p-4'>
                                            <div className='flex items-center gap-2'> 
                                                <img src={lesson.image} alt={lesson.title} className='w-16 h-16 object-cover rounded-2xl'/>
                                                <div>
                                                    <h2 className='text-xl my-1 font-bold text-bg-toggle'>{lesson.title}</h2>
                                                    <p className='text-gray-600 mb-5'>{lesson.description}</p>  
                                                </div>
                                            </div>
                                            <div className='bg-first-color p-2 rounded-lg text-white cursor-pointer'>
                                                <FaArrowRotateLeft />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                </div>

                <div className='w-[35%]'>
                        {/* Video section */}
                        <div className='rounded-lg shadow-lg shadow-gray-400 my-6'>
                            <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Video</p>
                            <hr className='border-gray-400' />
                            {/* Video player */}
                            {videoUrl && (
                                <div className='px-6 pt-6'>
                                    <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${videoUrl.split('v=')[1]}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            {/* Video input */}
                            <div className='p-6'>
                                <label htmlFor='videoUrl' className='block mb-2'>Video URL:</label>
                                <input
                                    type='text'
                                    id='videoUrl'
                                    className='w-full rounded-xl border border-gray-300 mb-2'
                                    placeholder='Enter video URL'
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                />
                            </div>

                            
                        </div>

                        <div className='rounded-lg shadow-lg shadow-gray-400 my-6 pb-5'>
                            <div className='py-4 px-6'>
                                <p className='text-bg-toggle text-xl font-bold '>Meta</p>
                                <p className='text-gray-700'>Extra options</p>
                            </div> 
                            <hr className='border-gray-400' /> 

                            <form action="" className='mx-8 my-5'> 
                               <div className='flex flex-col gap-2'>
                                    <label htmlFor="Category">Category</label>
                                    <input type="text" placeholder='React' className='rounded-xl border border-gray-300 mb-2 my-1'/>
                               </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="Duration">Duration</label>
                                    <input type="text" placeholder='10' className='rounded-xl border border-gray-300 mb-2 my-1'/>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="Start-Date">Start Date</label>
                                    <input type="date" className='rounded-xl border border-gray-300 mb-2 my-1' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="End-Date">End Date</label>
                                    <input type="date" className='rounded-xl border border-gray-300 mb-2 my-1'/>
                                </div>
                            </form>

                        </div>
                </div>
            </div>
        </div>
  );
}

export default EditCourseModal;