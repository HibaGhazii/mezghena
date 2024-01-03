import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const PopularCourses = () => {
  const courses = [
    {
      title: 'Web development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec',
      imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    },
    {
      title: 'Web development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec',
      imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    },
    {
      title: 'Web development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec',
      imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    },
    {
      title: 'Web development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec',
      imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderRef = useRef(null);

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='flex flex-row items-center relative'>
      <div
        className='absolute left-0 md:left-20 lg:left-14 xl:left-28 top-1/2 transform -translate-y-1/2 cursor-pointer'
        onClick={prevSlide}
      >
        <BsArrowLeftCircleFill className='text-first-color w-[2.5rem] h-[2.5rem]' />
      </div>
      <div className='w-3/4 m-auto mt-20'>
        <Slider {...settings} className='slick-container' ref={sliderRef}>
          {courses.map((course, index) => (
            <div key={index} className='bg-white h-[450px] text-black rounded-xl' style={{ margin: '0 10px' }}>
              <div className='flex justify-center items-center'>
                <img src={course.imageUrl} alt={course.title} className='rounded-xl h-72' />
              </div>

              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{course.title}</p>
                <p className='text-sm -mt-2 text-center'>{course.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div
        className='absolute right-0 md:right-20 lg:right-14 xl:right-28 top-1/2 transform -translate-y-1/2 cursor-pointer'
        onClick={nextSlide}
      >
        <BsArrowRightCircleFill className='text-first-color w-[2.5rem] h-[2.5rem] drop-shadow-2xl' />
      </div>
    </div>
  );
};

export default PopularCourses;
