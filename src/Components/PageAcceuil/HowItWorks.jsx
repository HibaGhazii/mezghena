import React from 'react';

const HowItWorks = () => {
 
  return (
    <div className='pt-14'>
      
      {/* Title and description of the HowItWorks section */}
      <div className='text-center '>
        <p className='text-2xl font-bold text-[25px] text-bg-toggle'>How it works</p>
        <p className='text-gray-500 mx-20 mb-3'>Lorem Ipsum is simply dummy text of the printing</p>
      </div>

      {/* Main content of the HowItWorks section */}
      <div className='flex flex-col items-center md:flex md:flex-row md:mx-32'>
        
        {/* Left section with steps and descriptions */}
        <div className=''>
          <div className='rounded-3xl shadow-md shadow-gray-400 mx-10 py-2 md:mx-8 md:my-4'>
            
            {/* Step 1 */}
            <div className='p-2 m-4 md:mx-3 md:p-2 hover:bg-bg-toggle hover:rounded-lg hover:text-white '>
              <p className='font-bold text-lg'>Sign Up</p>
              <p className=''>Montes vivamus curae quisque et primis pretium nullam.</p>
            </div>
            <hr />

            {/* Step 2 */}
            <div className='p-2 m-4 md:mx-3 md:p-2 hover:bg-bg-toggle hover:text-white hover:rounded-lg '>
              <p className='font-bold text-lg'>Get access</p>
              <p className=''>Montes vivamus curae quisque et primis pretium nullam.</p>
            </div>
            <hr />

            {/* Step 3 */}
            <div className='p-2 m-4 md:mx-3 md:p-2 hover:bg-bg-toggle hover:text-white hover:rounded-lg '>
              <p className='font-bold text-lg'> Practice questions</p>
              <p className=''>Prepare for the MLA exam in multiple modes of revision and track your progress with your personalised dashboard</p>
            </div>
            <hr />

            {/* Step 4 */}
            <div className='p-2 m-4 md:mx-3 md:p-2 hover:bg-bg-toggle hover:text-white hover:rounded-lg '>
              <p className='font-bold text-lg'>Get Result</p>
              <p className=''>compare your results with your peers with advanced analytics</p>
            </div>
          </div>
        </div>

        {/* Right section with an image and a button */}
        <div className='lg:w-full lg:h-full relative lg:block hidden'>
          <img src="/img/howitwork.png" className='w-full h-auto max-w-xl rounded-lg' alt="How It Works Image"/>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:translate-y-28 text-center'>
            <button className='bg-first-color text-white rounded-xl px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 lg:text-lg'>Start Now</button>
          </div>
        </div>

      </div>

      {/* Additional steps displayed on larger screens */}
      <div className='md:flex md:flex-row md:gap-4 md:mx-24 md:pt-16 hidden'>
        {/* Step 1 */}
        <div>
          <div className=''>
            <img src="/img/signUp.svg" className='rounded-xl w-10 h-10 bg-first-color p-2'/>
          </div>
          <div>
             <p className='text-light-blue text-xl'>Sign Up</p>
             <p className='text-gray-600'>Montes vivamus curae quisque et primis pretium nullam. Congue dis convallis eget ipsum cubilia ante.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div>
            <img src="/img/getAccess.svg" className='rounded-xl w-10 h-10 bg-first-color p-2' />
          </div>
          <div>
            <p className='text-light-blue text-xl'>Get access</p>
            <p className='text-gray-600'>Access to question bank of over 2000 questions.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div>
            <img src="/img/question.svg" className='rounded-xl w-10 h-10 bg-first-color p-2'/>
          </div>
          <div>
            <p className='text-light-blue text-xl'>Practice questions</p>
            <p className='text-gray-600'>Prepare for the MLA exam in multiple modes of revision and track your progress with your personalised dashboard.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div>
          <div>
            <img src="/img/result.svg" className='rounded-xl w-10 h-10 bg-first-color p-2'/>
          </div>
          <div>
            <p className='text-light-blue text-xl'>Get Result</p>
            <p className='text-gray-600'>compare your results with your peers' with advanced analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
