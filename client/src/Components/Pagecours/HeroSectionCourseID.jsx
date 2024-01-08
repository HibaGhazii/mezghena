import React from 'react'
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const HeroSectionCourseID = () => {
  return (
    <div className="text-white flex flex-row pb-12 md:pt-28 bg-[url('../src/Components/assets/img/Hero-Section.png')] rounded-b-[60px] bg-cover">
      
        <div className='w-1/2 flex flex-col gap-12 pt-10'>
            <div className='flex ml-36 '>
                <Breadcrumb aria-label="Default breadcrumb example " >
                    <Breadcrumb.Item href="/" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/courses">Courses</Breadcrumb.Item>
                    <Breadcrumb.Item>Developement</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='flex flex-col ml-36 gap-3'>
                <p className='text-4xl font-bold text-light-blue'>Learn Python from scratch course</p>
                <p>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p>
                <div className='flex gap-6'>
                    <p>Made by <span className='text-second-color'>Gallen Collignon</span></p>
                    <p>Participants: <span className='text-second-color'>3345</span></p>
                </div>
            </div>
        </div>

        <div className="w-1/2">

        </div>
    </div>
  )
}

export default HeroSectionCourseID
