import React, { useState } from 'react'; 
import DashboardNav from './DashboardNav';
import image from '../assets/img/howitwork.png';
import { FaArrowRotateLeft, FaClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdInsertChart } from "react-icons/md";
import { FaFileAlt, FaFolder  } from "react-icons/fa";

function ResumeCourse() {
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/4k6Xgjqkad4'); 
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };

    const handleVideoClick = (url) => {
        setVideoUrl(url);
    };

    const lessons = [
        {
            id: 1,
            title: "Installation",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt.",
            videoUrl: "https://www.youtube.com/embed/4k6Xgjqkad4",
        },
        {
            id: 2,
            title: "The MVC architectural pattern",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt.",
            videoUrl: "https://www.youtube.com/embed/sBws8MSXN7A",
        },
        
        {
            id: 3,
            title: "Database Models",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt.",
            videoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
        },
        
        {
            id: 4,
            title: "Database Access",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt.",
            videoUrl: "https://www.youtube.com/embed/XLJN4JfniH4",
        },
        
        {
            id: 5,
            title: "Eloquent Basics",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt.",
            videoUrl: "https://www.youtube.com/embed/UBOj6rqRUME",
        },
        
        {
            id: 6,
            title: "Take quiz",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt illum ipsam magniima mollitia officiis quia tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta eius enim inventoreus optio ratione veritatis. Beatae deserunt.",
            videoUrl: "https://www.youtube.com/embed/qjI7cE3aW0s",
        },
    ];

    return (
        <div className='pl-[340px] mr-[100px] mt-5'>
            <DashboardNav/>
            <div className='flex justify-between items-center mt-10'>
                <p className='text-bg-toggle text-4xl font-semibold'>React.js course</p>
            </div>
           
           <div className='flex gap-10'>
                <div className=' w-[65%]'>
                    <div className='rounded-lg shadow-lg shadow-gray-400 mt-6'>

                        <div className="p-3 flex flex-col justify-center">
                            {/* Video */}
                            <div className="relative w-full h-96">
                                <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={videoUrl}
                                title="Random Video"
                                allowFullScreen
                                ></iframe>
                            </div>
                            
                            {/* Description */}
                            <div className="p-2">
                                <p className="text-gray-700">
                                    {/* Display description of the currently selected lesson */}
                                    {lessons.find(lesson => lesson.videoUrl === videoUrl)?.description || ''}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='rounded-lg shadow-lg shadow-gray-400 my-6'>
                        <div className=''>
                            {/* Map over lessons to display video titles */}
                            {lessons.map((lesson, index) => (
                                <div key={index} className=''>
                                    {/* Attach handleVideoClick to each video title */}
                                    <p onClick={() => handleVideoClick(lesson.videoUrl)} className='font-semibold py-4 px-6 cursor-pointer'>{lesson.id}. {lesson.title}</p>
                                    <hr className='border-gray-300'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-[35%]'> 

                    <div className='hidden rounded-lg shadow-lg shadow-gray-400 mt-6'>
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

                    <div className='rounded-lg shadow-lg shadow-gray-400 mt-6 p-6 text-center text-lg font-semibold'>
                    
                        <button className='bg-first-color text-white rounded-2xl w-full py-2 mb-3'> 
                            <p>Get all Courses</p>
                            <p>9$ / month</p>
                        </button>

                        <hr className='border-gray-400'/>

                        <button className='bg-light-blue/50 text-first-color rounded-2xl w-full py-2 mt-3'>
                            <p>Purshase Course</p>
                            <p>25$ USD</p> 
                        </button>
                    
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
