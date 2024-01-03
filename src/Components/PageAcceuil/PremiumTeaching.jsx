import React from 'react';

const PremiumTeaching = () => {
  return (
    <div className="bg-[url('../public/img/premiumTeachingBg.svg')] flex flex-col pt-10 pb-56 px-16 mt-10 sm:pb-0 sm:mt-10">
      {/* Container for the content */}
      <div className='flex flex-col gap-4 relative md:flex md:flex-row'>

        {/* Image container on the left */}
        <div className='absolute top-[100%] sm:top-0 sm:left-0 sm:w-1/2'>
          <img src="/img/teachingImage.svg" className='w-full h-80 sm:w-full sm:h-[420px] sm:ml-[-70px] lg:h-[340px]' />
        </div>

        {/* Text content container on the right */}
        <div className='sm:pl-[50%] sm:flex sm:flex-col sm:gap-8'>
          {/* Title */}
          <p className="text-4xl font-bold font-Roboto pb-10 sm:pb-0 md:mr-28">Premium <span className='text-second-color'>Teaching</span> Experience</p>

          {/* First point */}
          <div className="flex flex-row gap-4">
            <div>
              {/* Heart icon */}
              <div>
                <img src="/img/heart.svg" className='bg-second-color/40 rounded-full p-2 md:px-6 md:rounded-lg' />
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg font-Roboto'>Easily Accessible</h3>
              <p className='text-gray-500 font-Roboto'>Teaching will feel very comfortable with Mezghena.</p>
            </div>
          </div>

          {/* Second point */}
          <div className="flex flex-row gap-4">
            <div>
              {/* Teaching experience icon */}
              <div>
                <img src="/img/teachingExperience.svg" className='bg-second-color/40 rounded-full p-2 md:px-6 md:rounded-lg' />
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg font-Roboto'>Fun Teaching Experience</h3>
              <p className='text-gray-500 font-Roboto'>Teaching will feel very comfortable with Mezghena.</p>
            </div>
          </div>

          {/* Button to become a teacher */}
          <button className='w-full md:w-56 bg-first-color text-white text-center rounded-xl py-2 mb-10 mt-4 font-Roboto md:mb-6 md:mt-0'>Become a Teacher</button>
        </div>

      </div>
    </div>
  );
}

export default PremiumTeaching;
