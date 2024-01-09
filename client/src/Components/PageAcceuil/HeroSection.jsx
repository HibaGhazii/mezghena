import React from 'react';
import herosection1 from "../assets/img/hero-section-img.svg";
import herosection2 from "../assets/img/heroSection1.png";
import herosection3 from "../assets/img/heroSection2.png";

const HeroSection = () => {

  return (
    <div className="flex flex-col md:flex-row pt-28 bg-[url('../src/Components/assets/img/Hero-Section.png')] py-14 md:py-28 lg:py-32 rounded-b-[60px] bg-cover">
      
      {/* Left section of the hero with text content */}
      <div className=" text-left px-12 md:block md:w-1/2 md:p-4 lg:px-16">
          <p className='text-second-color text-3xl font-sans font-semibold md:pl-6'>Best Learning  </p>
          <p className='text-light-blue text-3xl font-sans font-semibold md:pl-6'>Education Platform</p>
          <p className='text-8FB3CE text-3xl font-sans font-semibold md:pl-6'>in The Algeria</p>
          <p className='text-FFF md:pl-6 font-Inter pt-2'>Simple platform that lets you master what great managers do best, as develop trust, collaborate, and drive team performance.</p>
          
          {/* Search input and button */}
          <div className='md:pl-6'>
            <input type="text" placeholder='Course to learn...' className='rounded-l-full border-none md:rounded-l-lg md:py-3 lg:w-3/4'/>
            <button className='bg-first-color text-white px-5 py-2 mt-5 rounded-r-full md:rounded-r-lg md:py-3'>Search</button>
          </div>
          
      </div>

      {/* Right section of the hero with images and promotional text */}
      <div className="flex flex-row justify-between pt-10 md:w-1/2 md:relative ">
        <div className=''>
          <img src={herosection1} className='md:hidden'/>
          
          {/* Images displayed on larger screens */}
          <div className='hidden md:absolute md:top-0 md:left-0 md:right-0 md:flex md:mx-4 lg:flex lg:mx-32'>
            
            {/* Left image */}
            <div className='md:w-1/2 md:absolute md:top-10 md:-left-2 lg:absolute lg:top-10 lg:-left-2'>
              <img src={herosection2} className='md:w-[250px] md:h-[250px] lg:w-full lg:h-[250px]' alt="Hero Section Image 1"/>
            </div>
            
            {/* Right image */}
            <div className='md:w-1/2 md:absolute md:-top-6 md:right-0 lg:absolute lg:-top-6 lg:right-0'>
              <img src={herosection3} className='md:w-[250px] md:h-[250px] lg:w-full lg:h-[250px]' alt="Hero Section Image 2"/>
            </div>
            
          </div>
        </div>

        {/* Promotional text displayed on the right */}
        <div className='text-white bg-second-color rounded-l-3xl my-6 px-4 p-5 md:absolute md:rounded-2xl md:top-40 md:left-28 md:pt-2 md:pb-1 md:mx-8 lg:left-32 lg:mx-24'>
          <p> ✓ Get 30% off on every 1st month</p>
          <p> ✓ Expert teachers</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
