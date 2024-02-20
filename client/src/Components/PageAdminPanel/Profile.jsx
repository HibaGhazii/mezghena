import React from 'react'
import DashboardNav from './DashboardNav'
import image from "../assets/img/howitwork.png";
import { TiLocation } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";

const Profile = () => {
    const studentQueries = [
        {
            image:image,
            title:'Machine learning Bootcamp',
            teacher:'Brandon Taylor'
        },
        {
            image:image,
            title:'Machine learning Bootcamp',
            teacher:'Brandon Taylor'
        },
        {
            image:image,
            title:'Machine learning Bootcamp',
            teacher:'Brandon Taylor'
        },

    ]
  return (
    <div className='pl-[340px] mr-[100px] mt-5'>
    <DashboardNav/>

    <div className='mt-10'>
        <p className='text-bg-toggle text-4xl font-semibold'>Profile</p>
        <p className='text-gray-600 my-1'>Welcome to Mezghena Profile page</p>
    </div>

    <div className='flex items-center gap-2'>

        <div className=' w-[30%] rounded-lg shadow-lg shadow-gray-400 mt-6'>
            <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Account</p>
            <hr className='border-2 border-blue-200'/>

            <div className='flex gap-2 items-center my-2'>
                <img src={image} className='w-14 h-14 rounded-full mx-4'/>
                <div className='flex flex-col text-left'>
                    <p className='text-bg-toggle font-bold text-2xl'>John Doe</p>
                    <p className='text-gray-600 text-md'>FullStack Developer</p>
                    <p className='text-gray-400 text-sm'>Michele.colin@gmail.com</p>
                </div>
            </div>

            <hr className='border-2 border-blue-200'/>

            <div className='flex items-center gap-2 mx-4'>
                <TiLocation className='w-8 h-8 my-3 text-bg-toggle'/>
                <p>125 Govt College Street, Monohorpur</p>
            </div>

            <hr className='border-2 border-blue-200'/>
 
            <div className='flex items-center gap-2 mx-4'>
                <TbWorld className='w-8 h-8 my-3 text-bg-toggle'/>
                <p>https://mywebsite.com</p>
            </div>
            
        </div>

        <div className=' w-[70%] rounded-lg shadow-lg shadow-gray-400 mt-6'>
            <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Student Queries</p>
            <hr className='border-2 border-blue-200'/>

            {studentQueries.map((query, index) => (
                <React.Fragment key={index}>
                    <div className='flex gap-2 items-center my-2'>
                        <img src={query.image} className='w-14 h-14 rounded-full mx-4'/>
                        <div className='flex flex-col text-left'>
                            <p className='text-bg-toggle font-bold text-lg'>{query.title}</p>
                            <p className='text-gray-600 text-sm'>{query.teacher}</p>
                        </div>
                    </div>
                    {index !== studentQueries.length - 1 && <hr className='border-2 border-blue-200'/>}
                </React.Fragment>
            ))}
            
        </div>
    </div>

    </div>
  )
}

export default Profile
