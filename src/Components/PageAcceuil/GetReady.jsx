import React from 'react';

const GetReady = () => {
  // Array of skills with their details
  let skills = [
    {
      image: '/img/computer.svg',
      title: 'Learn The Latest Skills',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
    },
    {
      image: '/img/letter.svg',
      title: 'Get Ready For a Career',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
    },
    {
      image: '/img/certificate.svg',
      title: 'Earn a Certificate',
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
    },
  ];


  return (
    <div className='mx-14 lg:mx-44 '>
      {/* Container with a background color and rounded corners */}
      <div className='transform -translate-y-[30px] md:-translate-y-[30px] lg:-translate-y-[40px] bg-first-color w-full md:rounded-3xl h-auto lg:h-[230px] text-white rounded-[20px]'>
        {/* List of skills displayed in a row on larger screens and in a column on smaller screens */}
        <ul className='sm:flex sm:flex-col md:flex md:flex-row'>
          {/* Map through the skills array and create a list item for each skill */}
          {skills.map((skill, index) => (
            <li key={index} className='flex flex-row p-5 sm:p-5 md:p-6 lg:p-10'>
              {/* Left section containing the skill image */}
              <div className='w-full pl-4 md:w-full'>
                <img src={skill.image} className='bg-light-blue/40 rounded-full p-5 md:px-6 md:rounded-lg' alt={skill.title} />
              </div>

              {/* Right section containing the skill title and body */}
              <div className='flex flex-col mx-3 sm:mx-5'>
                <h3 className='text-lg font-semibold font-Roboto'>{skill.title}</h3>
                <p className='text-white/60 font-Roboto'>{skill.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GetReady;
