import React, { useState } from 'react'; 
import DashboardNav from './DashboardNav';
import image from '../assets/img/howitwork.png';
import { FaArrowRotateLeft,FaClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdInsertChart } from "react-icons/md";
import { FaFileAlt,FaFolder  } from "react-icons/fa";

function ResumeCourse() {
    const [videoUrl, setVideoUrl] = useState(''); 
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };


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
                <p className='text-bg-toggle text-4xl font-semibold'>React.js course</p>
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

                    <div className='rounded-lg shadow-lg shadow-gray-400 mt-6'>
                        <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Add Comments + </p>
                        <hr className='border-gray-400'/>

                        <div className='mx-4 my-3'>
                            <p className='text-gray-500 text-md ml-2 my-1'>Comment</p>
                            <textarea name="comment" id="" cols="30" rows="10" placeholder='Write your comment...' className='rounded-lg max-h-44 w-full border-gray-400'></textarea>
                            <div className='flex items-center gap-2 my-2'>
                                <p>Rate the course:</p>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`text-2xl cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                            onClick={() => handleRating(index + 1)}
                                            role="img"
                                            aria-label="star"
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-1 justify-end pb-3 mx-2'>
                            <button className=' bg-first-color/30 text-bg-toggle py-1 px-8 rounded-xl'>Modify</button>
                            <button className=' bg-first-color text-white py-1 px-8 rounded-xl'>Send</button>
                        </div>
                    </div>

                    <div className=' rounded-lg shadow-lg shadow-gray-400 mt-6'>
                        
                        <div className='px-5 shadow-lg rounded-xl p-4'>
                            <div className='flex items-center gap-4 mb-5'> 
                                <img src={image} className='w-16 h-16 object-cover rounded-full'/>
                                <div>
                                    <h2 className='text-lg font-bold text-bg-toggle'>Micheal John</h2>
                                    <p className='text-gray-600 mb-2 text-sm'>Instructor</p>  
                                </div> 
                            </div>

                            <div className='my-2'>
                                <p>Having over 12 years exp. Adrian is one of the lead UI designers in the industry Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, aut.</p>
                            </div>
                            
                        </div>
                       
                    </div>

                    <div className=' rounded-lg shadow-lg shadow-gray-400 mt-6 px-4'>
                        
                        <div className='flex items-center px-4'>
                            <MdInsertChart className='text-first-color w-8 h-8'/>
                            <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Beginner</p>
                        </div>
                        <hr className='border-gray-400'/>
                        
                        <div className='flex items-center px-4'>
                            <FaClock className='text-first-color w-7 h-7'/>
                            <p className='text-bg-toggle text-lg font-semibold py-4 px-6'>2 <span className='font-normal'>hrs</span> 26 <span className='font-normal'>min</span></p>
                        </div>
                    </div>

                    <div className=' rounded-lg shadow-lg shadow-gray-400 mt-6 px-4'>
                        
                        <div className='flex items-center px-4'>
                            <FaFolder  className='text-first-color w-7 h-7'/>
                            <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Latest chapter</p>
                        </div>
                        <hr className='border-gray-400'/>
                        
                        <div className='flex items-center px-4'>
                            <FaFileAlt className='text-first-color w-7 h-7'/>
                            <p className='text-bg-toggle text-lg font-semibold py-4 px-6'>Database Models</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  );
}

export default ResumeCourse;