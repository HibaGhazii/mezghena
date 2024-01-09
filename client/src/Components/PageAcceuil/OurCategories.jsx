// Import useEffect, useState, and icons from the 'react' and 'react-icons/bs' libraries
import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import category from "../assets/img/category1.jpg"
import category2 from "../assets/img/category2.jpg"
import category3 from "../assets/img/category3.jpg"

const OurCategories = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide objects with image, category, and professor information
  const slidesImages = [
    { image: category, category: 'Marketing', professor: '@George Brown College' }, //taille de l'image 280 x 130
    { image: category2, category: 'Data analysis', professor: '@George Brown College' },
    { image: category3, category: 'Web development', professor: '@George Brown College' },
    { image: category, category: 'Marketing', professor: '@George Brown College' },
    { image: category2, category: 'Data analysis', professor: '@George Brown College' },
    { image: category3, category: 'Web development', professor: '@George Brown College' },
  ];

  // Total number of slides
  const totalSlides = slidesImages.length;

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // useEffect to start the slider when the component mounts
  useEffect(() => {
    startSlider();
  }, []);

  // Function to start the slider, changing slides every 2 seconds
  const startSlider = () => {
    setInterval(prevSlide, 2000);
  };

  return (
    <div className=''>
      <div className='flex flex-col items-center pt-14'>
        <div className='text-center '>
          <p className='text-2xl font-bold text-[25px] font-Jost text-bg-toggle'>Our Categories</p>
          <p className='text-gray-500 mx-20 mb-3'>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        {/* Display slides and navigation arrows */}
        <div className='flex justify-center items-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-3'>
          <BsArrowLeftCircleFill
            className='text-first-color w-[2rem] h-[2rem] drop-shadow-2xl cursor-pointer md:hidden lg:hidden'
            onClick={prevSlide}
          />

          {/* Map through the slidesImages array and display each slide */}
          {slidesImages.map((slide, idx) => (
            <div key={idx} className={`p-3 rounded-lg shadow-md shadow-gray-300 mx-4 ${currentSlide === idx ? 'block' : 'hidden'} md:flex md:flex-col md:mb-10 lg:flex lg:flex-col`}>
              <div>
                <img src={slide.image} alt={slide.category} className='w-[280px] h-[130px] rounded-lg' />
              </div>
              <div className='flex flex-col justify-center items-center py-1'>
                <p className='text-first-color font-bold'>{slide.category}</p>
                <p className='text-light-blue'>Professor {slide.professor}</p>
              </div>
            </div>
          ))}
          <BsArrowRightCircleFill
            className='text-first-color w-[2rem] h-[2rem] drop-shadow-2xl cursor-pointer md:hidden lg:hidden '
            onClick={nextSlide}
          />
        </div>
      </div>

      {/* Dots for slide navigation on smaller screens */}
      <span className='flex justify-center md:hidden lg:hidden'>
        {slidesImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`bg-gray-300 h-[0.6rem] w-[0.6rem] rounded-full border-none outline-none shadow-sm my-7 mx-[0.3rem] cursor-pointer 
            ${currentSlide === idx ? 'bg-second-color w-[1.2rem]' : ''}`}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default OurCategories;
