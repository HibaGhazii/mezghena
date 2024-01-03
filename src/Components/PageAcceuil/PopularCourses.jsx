// Import useEffect, useState, and arrows icons from the 'react' and 'react-icons/bs' libraries
import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const PopularCourses = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide objects with image, title, category, price, duration, courseNumber, and sales information
  const slidesImages = [
    {
      image: "/img/popCourse1.svg", //la taille d'image doit etre 278 x 238
      title: "UI/UX Design",
      category: 'UI/UX Design',
      price: "$98",
      duration: "15hr 50min",
      courseNumber: 15,
      sales: 300,
    },
    {
      image: "/img/popCourse2.jpg",
      title: "Web Development",
      category: 'Web Development',
      price: "$120",
      duration: "30hr 14min",
      courseNumber: 34,
      sales: 250,
    },
    {
      image: "/img/popCourse3.jpg",
      title: "Data Science Basics",
      category: 'Data Science',
      price: "$150",
      duration: "22hr 30min",
      courseNumber: 20,
      sales: 150,
    },
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

  // Function to start the slider, changing slides every 2000 milliseconds (2 seconds)
  const startSlider = () => {
    setInterval(prevSlide, 2000);
  };

  return (
    <div> 
      <div className='flex flex-col items-center relative'>
        <div className='text-center '>
          <p className='text-2xl font-bold text-bg-toggle'>Popular Online Courses</p>
          <p className='text-gray-500 mx-20 mb-3 font-Poppins'>Lorem Ipsum is simply dummy text of the printing</p>
        </div>

        {/* Display slides and navigation arrows */}
        <div className='flex justify-center items-center'>
          <BsArrowLeftCircleFill
            className='text-first-color w-[2rem] h-[2rem] drop-shadow-2xl cursor-pointer md:hidden lg:hidden'
            onClick={prevSlide}
          />

          {/* Map through the slidesImages array and display each slide */}
          {slidesImages.map((slide, idx) => (
            <div key={idx} className={`p-5 rounded-lg shadow-xl shadow-gray-300 mx-3 h-[410px] ${currentSlide === idx ? 'block' : 'hidden'} md:flex md:flex-col md:h-[410px] md:mb-10 lg:flex lg:flex-col`}>
              <div>
                <img src={slide.image} alt={slide.title} className='w-full rounded-lg' />
              </div>
              <div>
                <p className='text-gray-400 py-1 font-Poppins'>{slide.category}</p>
                <p className='font-bold font-Poppins'>{slide.title}</p>
                <p className='text-first-color font-bold my-1 font-Poppins text-sm'>{slide.price}</p>
              </div>
              <hr />
              <div className='flex flex-row text-xs justify-between mt-2 text-gray-400'>
                <div className='flex flex-row gap-1'>
                  <img src="/img/duration.svg" alt="Duration icon" />
                  <p className='font-Poppins'>{slide.duration}</p>
                </div>
                <div className='flex flex-row gap-1'>
                  <img src="/img/courseNumber.svg" alt="Course number icon" />
                  <p className='font-Poppins'>{slide.courseNumber} Courses</p>
                </div>
                <div className='flex flex-row gap-1'>
                  <img src="/img/sales.svg" alt="Sales icon" />
                  <p className='font-Poppins'>{slide.sales} Sales</p>
                </div>
              </div>
              <button className='bg-first-color font-Roboto transform translate-x-20 translate-y-2 md:translate-x-0 text-white rounded-2xl px-5 md:mx-6 lg:mx-12 py-1 mt-4'>
                Join Course
              </button>
            </div>
          ))}
          <BsArrowRightCircleFill
            className='text-first-color w-[2rem] h-[2rem] drop-shadow-2xl cursor-pointer md:hidden lg:hidden'
            onClick={nextSlide}
          />
        </div>

      </div>

      {/* Dots for slide navigation on smaller screens */}
      <span className='flex justify-center md:hidden lg:hidden '>
        {slidesImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`bg-gray-300 h-[0.6rem] w-[0.6rem] rounded-full border-none outline-none shadow-sm my-9 mx-[0.3rem] cursor-pointer 
            ${currentSlide === idx ? 'bg-second-color w-[1.2rem]' : ''}`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default PopularCourses;
