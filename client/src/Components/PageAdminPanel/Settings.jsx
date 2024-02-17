import React from 'react'
import DashboardNav from './DashboardNav'
import DropZone from './DropZone';
import image from '../assets/img/howitwork.png';

const Settings = () => {
  return (
    <div className='pl-[500px] mr-[100px] mt-5'>
            <DashboardNav/>
            <div className='flex justify-between items-center mt-10'>
                <p className='text-bg-toggle text-4xl font-semibold'>Edit Account</p>
                
            </div>

            <div className='rounded-lg shadow-lg shadow-gray-400 mt-6 mr-[300px]'>
                <p className='text-bg-toggle text-xl font-bold py-4 px-6'>Account</p>
                <hr className='border-gray-400'/>

                <div className='p-6'>
                    
                        <div className='flex items-center gap-7'>
                            <label htmlFor="image" className='text-lg'>Avatar</label>
                            <img src={image} className='w-14 h-14 rounded-full'/>
                            <DropZone/>
                        </div>

                        <form action="">
                          <div className='flex items-center gap-[68px]'>
                              <label htmlFor="image" className='text-lg'>Full Name</label> 
                              <div className='flex gap-3'>
                                <input type="text" placeholder='First Name' className='w-[270px] rounded-xl border border-gray-300 mb-2'/>
                                <input type="text" placeholder='Last Name' className='w-[270px] rounded-xl border border-gray-300 mb-2'/>
                              </div>
                          </div>

                          <div className='flex items-center gap-[105px]'>
                              <label htmlFor="image" className='text-lg'>Email</label>
                              <input type="text" placeholder='React js' className='w-[550px] rounded-xl border border-gray-300 mb-2'/>
                          </div>

                          <div className='flex items-center gap-[83px]'>
                              <label htmlFor="image" className='text-lg'>Website</label>
                              <input type="text" placeholder='React js' className='w-[550px] rounded-xl border border-gray-300 mb-2'/>
                          </div>

                          <div className='flex items-center gap-2'>
                              <label htmlFor="image" className='text-lg'>Change password</label>
                              <input type="text" placeholder='React js' className=' w-[550px] rounded-xl border border-gray-300 mb-2'/>
                          </div>

                          <div className='flex items-center gap-2 mt-5 ml-36'>
                            <button className='bg-first-color text-white px-6 py-1 rounded-full'>Save Changes</button>
                            <div className='flex gap-1'>
                              <input type="checkbox" className='rounded' />
                              <p className='text-gray-400 text-sm'>Subscribe to Newsletter</p>
                            </div>
                          </div>
                        </form>
                    
                </div>
            </div>
    </div>
  )
}

export default Settings
