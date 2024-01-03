import React, { useState } from 'react';
import Pagination from './Pagination'; // Adjust the import path based on your project structure


const courseList = [
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 38,
        session: 15,
        level: "Beginner",
    },
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 38,
        session: 15,
        level: "Intermediate",
    },
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 38,
        session: 15,
        level: "Intermediate",
    },
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 38,
        session: 15,
        level: "Advanced",
    },
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 38,
        session: 15,
        level: "All levels",
    },
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 20,
        session: 15,
        level: "Beginner",
    },
    ,
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 38,
        session: 15,
        level: "All levels",
    },
    {
        image:'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
        title: "Web Design Principles for Beginners",
        description: "Learn the fundamentals of web design, including color theory, typography, and layout techniques. This course is designed",
        professor:'John Taieb ( Developer ), learn to code',
        price: 98,
        duration: 20,
        session: 15,
        level: "Beginner",
    },

]

const CourseList = () => {
  const [courses, setCourses] = useState(courseList);
  const [currentPage, setCurrentPage] = useState(1); 

  const handlePageClick = (selectedPage) => {
    
    setCurrentPage(selectedPage);
    
    const coursesPerPage = 4;
    const startIndex = (selectedPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const newCourses = courseList.slice(startIndex, endIndex);
    setCourses(newCourses);
  };

  return (
                <div className=''>
                    <div className="flex flex-col gap-4">
                        {courseList.map((course, index) => (
                            <div className='flex flex-col md:flex-row' key={index}> 

                                <div className='flex flex-row gap-3'>
                                        <div className=''>
                                            <img className="w-80 h-40 rounded-lg" src={course.image} alt={course.name} /> 
                                        </div>
                                        <div>
                                            <p className='font-bold text-lg text-first-color'>{course.title}</p>
                                            <p className='text-sm'>{course.description}</p>
                                            <p className='text-xs text-gray-500 my-2'>{course.professor}</p>

                                            <div className='flex gap-2 mt-4 text-gray-500 text-xs'>
                                                <p>{course.duration} Hours •</p>
                                                <p>{course.session} Session •</p>
                                                <p>{course.level}</p>
                                            </div>

                                            <button className='bg-61B4F2 text-dark-blue rounded-full px-6 py-1 text-sm mt-2'>Best Seller</button>
                                        </div>

                                        <div className='text-first-color font-semibold'>
                                            {/* {course.promo} <br /> */}
                                            ${course.price}
                                        </div>
                                    </div>
                                    
                            </div>
                        ))}
                        <Pagination onPageChange={handlePageClick} />
                    </div>
                </div>

  );
};

export default CourseList;
