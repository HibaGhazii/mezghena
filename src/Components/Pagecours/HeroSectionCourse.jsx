import React from 'react'

const HeroSectionCourse = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-20 pb-5 md:pt-28 bg-[url('../public/img/Hero-Section.png')] rounded-b-[60px] bg-cover">
      
      <div className='text-EEE md:text-first-color font-bold text-center text-xl md:text-3xl'>
        <p className='md:mr-14'>Find a course</p>      
      </div>

      <div className="md:block md:w-1/2 md:px-4 pb-4 md:py-2">
          {/* Search input and button */}
          <div className=''>
            <input type="text" placeholder='Course to learn...' className='rounded-l-full border-none md:py-3 lg:w-3/4'/>
            <button className='bg-first-color text-white px-5 py-2 mt-5 rounded-r-full md:py-3'>Search</button>
          </div>
          
      </div>
    </div>
  )
}

export default HeroSectionCourse
