import React , { useState } from 'react'
import DashboardNav from './DashboardNav'
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import DropZone from './DropZone';
import image from '../assets/img/howitwork.png';

const AddLesson = () => {
    const [files, setFiles] = useState([]);
    const [videoUrl, setVideoUrl] = useState(''); 

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = [...e.dataTransfer.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

  return (
    <div className='pl-[340px] mr-[100px] mt-5'>
            <DashboardNav/>
            <div className='flex justify-between items-center mt-10'>
                <p className='text-bg-toggle text-4xl font-semibold'>Add Lesson</p>
                <button className='rounded-3xl bg-first-color text-white px-8 py-2'>Save</button>
            </div>

            <div className='rounded-lg shadow-lg shadow-gray-400 mt-6'>
                <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Lesson details</p>
                <hr className='border-gray-400'/> 

                <div className='flex items-center'>
                    <div className='p-6 w-[60%]'>
                        <div className='flex items-center gap-7'>
                            <label htmlFor="image" className='text-lg'>Image</label>
                            <img src={image} className='w-14 h-14 rounded-full'/>
                            <DropZone/>
                        </div>

                        <div className='flex items-center gap-16'>
                            <label htmlFor="image" className='text-lg'>Title</label>
                            <input type="text" placeholder='Write a title..' className='w-full rounded-xl border border-gray-300 mb-2'/>
                        </div>

                        <div className='flex items-center gap-10'>
                            <label htmlFor="image" className='text-lg'>Course</label>
                            <input type="text" placeholder='React js' className='w-full rounded-xl border border-gray-300 mb-2'/>
                        </div>

                        <div className='flex items-center gap-12'>
                            <label htmlFor="image" className='text-lg'>Video</label>
                            
                            {/* Video input */}
                            <div className=''>
                                <input
                                    type='text'
                                    id='videoUrl'
                                    className='w-[605px] rounded-xl border border-gray-300 mb-2'
                                    placeholder='Enter video URL'
                                    value={videoUrl}
                                    onChange={(e) => setVideoUrl(e.target.value)}
                                />
                            </div>   
                        </div>

                    </div>
                    <div className='px-6 pb-6 w-[40%]'>
                        {/* Video player */}
                        {videoUrl && (
                                <div className='px-6 pt-6'>
                                    <iframe
                                    width="100%"
                                    height="250"
                                    src={`https://www.youtube.com/embed/${videoUrl.split('v=')[1]}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    ></iframe>
                                </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='rounded-lg shadow-lg shadow-gray-400 my-6'>
                <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Files</p>
                <hr className='border-gray-400'/>

                <div className='p-6 flex gap-10'>
                    <div 
                        className="w-[50%] h-56 bg-gray-400 p-4 rounded-lg"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    > 
                    <p className="mb-2 text-center text-white pt-[85px]">Drop files here to upload</p>
                        
                    </div> 
                    <div className=''>
                        <div className='flex items-center gap-2'>
                            <FaFolder className='text-first-color w-5 h-5'/>
                            <p>Lesson Files</p>
                        </div>
                        <ul className='ml-4 my-1 flex flex-col'>
                            {files.map((file, index) => (
                            <li key={index} className='inline-flex gap-2 my-1'><FaFile className='text-first-color w-5 h-5'/>{file.name}</li>
                            ))}
                        </ul>
                    </div>   
                </div>
            </div>
      
    </div>
  )
}

export default AddLesson
