import React from 'react';
import DashboardNav from './DashboardNav';
import DropZone from './DropZone';
import image from '../assets/img/howitwork.png';
import { FaGlobe } from 'react-icons/fa'; // Example using react-icons

const Settings = () => {
  return (
    <div className='pl-[550px] mr-[100px] mt-5'>
      <DashboardNav />
      <div className='flex justify-between items-center mt-10'>
        <p className='text-bg-toggle text-4xl font-semibold'>Edit Account</p>
      </div>

      <div className='rounded-lg shadow-lg shadow-gray-400 mt-6 mr-[250px]'>
        <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Account</p>
        <hr className='border-gray-400' />

        <div className='p-6'>
          <div className='flex items-center gap-7'>
            <label htmlFor='image' className='text-lg'>
              Avatar
            </label>
            <img src={image} className='w-14 h-14 rounded-full' />
            <DropZone />
          </div>

          <form action=''>
            <div className='flex items-center gap-[68px]'>
              <label htmlFor='full-name' className='text-lg'>
                Full Name
              </label>
              <div className='flex gap-3'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='w-[270px] rounded-xl border border-gray-300 mb-2'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='w-[270px] rounded-xl border border-gray-300 mb-2'
                />
              </div>
            </div>

            <div className='flex items-center gap-[105px]'>
              <label htmlFor='email' className='text-lg'>
                Email
              </label>
              <input
                type='text'
                placeholder='Rcontact@johndoe.com'
                className='w-[550px] rounded-xl border border-gray-300 mb-2'
              />
            </div>

            <div className='flex items-center gap-[83px] relative'>
              <label htmlFor='website' className='text-lg'>
                Website
              </label>
              <input
                type='text'
                placeholder='https://youtube.com/54sdqsd45sd46qsd5sd46qsd5sd46qsd'
                className='w-[550px] rounded-xl border border-gray-300 mb-2 pl-10'
              />
              <FaGlobe className='absolute translate-x-40 -translate-y-[2px] text-gray-800' />
            </div>

            <div className='flex items-center gap-2'>
              <label htmlFor='password' className='text-lg'>
                Change password
              </label>
              <input
                type='text'
                placeholder='Enter Password'
                className=' w-[550px] rounded-xl border border-gray-300 mb-2'
              />
            </div>

            <div className='flex items-center gap-2 mt-5 ml-36'>
              <button className='bg-first-color text-white px-6 py-1 rounded-full'>
                Save Changes
              </button>
              <div className='flex gap-1'>
                <input type='checkbox' className='rounded' />
                <p className='text-gray-400 text-sm'>Subscribe to Newsletter</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
