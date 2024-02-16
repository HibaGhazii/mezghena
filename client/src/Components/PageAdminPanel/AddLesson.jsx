import React , { useState } from 'react'
import DashboardNav from './DashboardNav'
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

const AddLesson = () => {
    const [files, setFiles] = useState([]);

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

                <div className='p-6'>
                    <p>Title</p>
                    <input type="text" placeholder='Basics of React...' className='w-full rounded-xl border border-gray-300 mb-2 my-1'/>
                    
                    <p className='mt-2'>Description</p>
                    <textarea name="description" placeholder='Basics of React...' cols="30" rows="10"  className=' w-full rounded-xl border border-gray-300 my-1'></textarea>
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
