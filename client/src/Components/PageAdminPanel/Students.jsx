import React from 'react';
import DashboardNav from './DashboardNav';

const Students = () => {
  return (
    <div className='pl-[340px] mr-[100px] mt-5'>
            <DashboardNav/>
            <div className='mt-10'>
                <p className='text-bg-toggle text-4xl font-semibold'>Students</p>
                <p className='mt-1'>View your Students here</p>
            </div>

            <div className='rounded-lg shadow-lg shadow-gray-400 mt-6'>
                <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Students List</p>
                <hr className='border-gray-400'/>

            </div>
    </div>
  );
};

export default Students;
