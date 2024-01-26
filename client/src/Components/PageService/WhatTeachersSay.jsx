import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import student1 from '../assets/img/category1.jpg';
import student2 from '../assets/img/category2.jpg';
import student3 from '../assets/img/category3.jpg';

const WhatTeachersSay = () => {

  // Data for each slide, including comments, names, specialties, and photos
  const slideComment = [
    {
      comment:'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots',
      name: "Dannette P. Cervantes",
      speciality:'Web Design',
      photo:student1
    },
    {
      comment:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      name: "Clara R. Altman",
      speciality:'UI/UX Design',
      photo:student2
    },
    {
      comment:'Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself roots.',
      name: "Finlay Kirk",
      speciality:'Web Developer',
      photo:student3
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideComment.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(nextSlide, 5000);
  };

  return (
    <div className='mt-14'>
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <p className='text-bg-toggle font-bold text-4xl'>What Teachers say</p>
            <p className='text-gray-500 mt-1'>Lorem Ipsum is simply dummy text of the printing.</p>
          </div> 

          {/* Slider container */}
          <div className='flex justify-center items-center sm:mx-80 lg:gap-2 mt-14'>
              {/* Left arrow for previous slide */}
              <BsArrowLeftCircleFill
                className='text-first-color w-[6rem] h-[2rem] drop-shadow-2xl cursor-pointer'
                onClick={prevSlide}
              />
            
              <div className='flex gap-2'>
                {/* Mapping through each slide and rendering its content */}
                {slideComment.slice(currentSlide, currentSlide + 1).map((slide, idx) => (
                  <div key={idx} className='hidden md:block'>
                    {/* Photo */}
                      <img src={slide.photo} alt={slide.name} className='rounded-lg w-96 h-56'/>
                  </div>
                ))}
                {slideComment.slice(currentSlide, currentSlide + 1).map((slide, idx) => (
                  <div key={idx} className={`text-center p-5 rounded-lg shadow-md shadow-gray-500 mx-3 w-96 h-56 md:mx-1 bg-first-color/10 md:flex md:flex-col md:mb-10 lg:flex lg:flex-col`}>
                    {/* Comment */} 
                    <div>
                      <p className='font-Roboto text-585858'>“{slide.comment}”</p>
                    </div>
                    {/* Student information */}
                    <div className='flex flex-row justify-center text-left gap-4 mt-2 mb-6 text-gray-400'>
                      <div>
                        <p className='text-black font-bold font-Roboto'>{slide.name}</p>
                        <p className='text-first-color font-Roboto'>{slide.speciality}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <BsArrowRightCircleFill
                className='text-first-color w-[6rem] h-[2rem] drop-shadow-2xl cursor-pointer'
                onClick={nextSlide}
              />

          </div>
          
        </div>
        
        {/* Dots for navigation between slides */}
        <span className='flex justify-center'>
          {slideComment.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`bg-gray-300 h-[0.6rem] w-[0.6rem] rounded-full border-none outline-none shadow-sm my-7 md:my-2 mx-[0.3rem] cursor-pointer 
                ${currentSlide === idx ? 'bg-second-color w-[1.2rem]' : ''}`}
            ></button>
          ))}
        </span>
    </div>
  );
};

export default WhatTeachersSay;
