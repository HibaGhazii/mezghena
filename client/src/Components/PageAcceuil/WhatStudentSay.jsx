import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const WhatStudentSay = () => {
  
  // State variables to manage the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for each slide, including comments, names, specialties, and photos
  const slideComment = [
    {
      comment:'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots',
      name: "Dannette P. Cervantes",
      speciality:'Web Design',
      photo:'/img/student1.svg'
    },
    {
      comment:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      name: "Clara R. Altman",
      speciality:'UI/UX Design',
      photo:'/img/student2.svg'
    },
    {
      comment:'Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself roots.',
      name: "Finlay Kirk",
      speciality:'Web Developer',
      photo:'/img/student3.svg'
    },
  ];

  // Total number of slides
  const totalSlides = slideComment.length;

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Function to go to a specific slide by index
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Effect hook to start the slider when the component mounts
  useEffect(() => {
    startSlider();
  },[]);

  // Function to start the slider with a setInterval
  const startSlider = () =>{
    setInterval(prevSlide, 2000);
  };

  return (
    <div>
      <div className='mt-32 lg:mx-28'>
        <div className='flex flex-col items-center'>
          <div className='text-center '>
            {/* Title */}
            <p className='text-2xl font-bold text-bg-toggle font-Jost'>What students say</p>
            <p className='text-gray-500 mx-20 mb-8 font-Poppins'>Lorem Ipsum is simply dummy text of the printing</p>
          </div>

          {/* Slider container */}
          <div className='flex justify-center items-center sm:mx-20 lg:gap-2'>
            {/* Left arrow for previous slide */}
            <BsArrowLeftCircleFill
              className='text-first-color w-[6rem] h-[2rem] drop-shadow-2xl cursor-pointer md:hidden lg:hidden'
              onClick={prevSlide}
            />
            
            {/* Mapping through each slide and rendering its content */}
            {slideComment.map((slide, idx) => (
              <div key={idx} className={`text-center p-5 rounded-[0.5rem] shadow-md shadow-gray-500 mx-3 h-[200px] md:h-auto lg:h-auto md:mx-1 bg-first-color/10 ${currentSlide === idx ? 'block' : 'hidden'} md:flex md:flex-col md:mb-10 lg:flex lg:flex-col`}>
                
                {/* Comment */} 
                <div>
                  <p className='font-Roboto text-585858'>“{slide.comment}”</p>
                </div>
                
                {/* Student information */}
                <div className='flex flex-row justify-center text-left gap-4 mt-2 mb-6 text-gray-400'>
                  <div className='flex flex-row'>
                    <img src={slide.photo} />
                  </div>
                  <div>
                    <p className='text-black font-bold font-Roboto'>{slide.name}</p>
                    <p className='text-first-color font-Roboto'>{slide.speciality}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Right arrow for the next slide */}
            <BsArrowRightCircleFill
              className='text-first-color w-[6rem] h-[2rem] drop-shadow-2xl cursor-pointer md:hidden lg:hidden'
              onClick={nextSlide}
            />
          </div>
          
        </div>
        
        {/* Dots for navigation between slides */}
        <span className='flex justify-center md:hidden lg:hidden'>
          {slideComment.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`bg-gray-300 h-[0.6rem] w-[0.6rem] rounded-full border-none outline-none shadow-sm my-7 mx-[0.3rem] cursor-pointer 
                ${currentSlide === idx ? 'bg-second-color w-[1.2rem]' : ''}`}
            ></button>
          ))}
        </span>
      </div>
    </div>
  )
}

export default WhatStudentSay;
