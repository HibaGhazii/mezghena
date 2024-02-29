import React, { useState } from 'react';
import DashboardNav from './DashboardNav';
import { BiMenuAltLeft } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import image from '../assets/img/howitwork.png';
import Pagination from '../Pagecours/Pagination';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

const CourseList = () => {

  const [courses, setCourses] = useState([
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    {
      image: image,
      title: "Introduction to Web Development",
      description: "Let's start with a quick tour of Vue's data binding features.",
      price: 123,
      sales: 34,
      level: "Intermediate",
      gulp: "GULP"
    },
    
  ]);
  

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Filter courses based on search term
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort courses based on selected criteria
  const sortedCourses = sortBy ? [...filteredCourses].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'sales') {
      return b.sales - a.sales;
    }
    return 0;
  }) : filteredCourses;

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedCourses.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="pl-[340px] mr-[100px] mt-5">
      <DashboardNav />

      <div>
        <div className='flex justify-between items-center mt-10'>
          <p className='text-bg-toggle text-4xl font-bold'>Manage Courses</p>
          <button className='rounded-3xl bg-first-color text-white px-8 py-2'>Add Course</button>
        </div>

        <div className='mt-10 p-6 shadow-lg rounded'>
          <div className='flex'>
            <button className='bg-first-color flex items-center gap-2 text-white px-8 py-2 rounded-[10px]'>
              <BiMenuAltLeft className='h-5 w-5' /> Filter
            </button>
            <div className='flex gap-2 items-center rounded-[5px]'>
              <input
                type="text"
                placeholder='Search Course'
                className='ml-4 border-none h-[50px] w-[1050px] outline-none rounded-[10px] placeholder:text-[14px] leading-[20px] font-normal'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <p><CiSearch className='text-bg-toggle w-6 h-6 cursor-pointer absolute top-[230px] right-36 z-0' /></p>
            </div>
          </div>

          <div className='flex justify-between mt-5 items-center'>
            <p className='text-gray-500'>Displaying {currentPosts.length} out of {sortedCourses.length} courses</p>
            <div className='flex gap-2 text-gray-400'>
              <p className='text-gray-500'>Sort by</p>
              <button onClick={() => setSortBy('title')}>Course</button>
              <button onClick={() => setSortBy('price')}>Price</button>
              <button onClick={() => setSortBy('sales')}>Sales</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {currentPosts.map((course, index) => (
            <div key={index} className='border p-4 flex items-center shadow-lg rounded-lg'>
              <img src={course.image} alt={course.title} className='w-40 h-40 object-cover rounded-3xl' />
              <div className='ml-4'>
                <h2 className='text-xl my-1 font-bold text-bg-toggle'>{course.title}</h2>
                <p className='text-gray-600 mb-5'>{course.description}</p>

                <div className='flex gap-2 text-gray-700 my-1'>
                  <p>${course.price}/mo</p>
                  <p>{course.sales} SALES</p>
                </div>

                <hr className='border-gray-500' />

                <div className='text-gray-700 text-sm flex justify-between my-1'>
                  <div className=' text-light-blue flex gap-2'>
                    <p>{course.gulp}</p>
                    <p>{course.level}</p>
                  </div>

                  <div className='flex gap-1'>

                    <button className='bg-second-color text-black rounded-xl py-1 px-5 flex items-center gap-1'>Add to favorite <CiHeart className='w-4 h-4'/></button>
                    <Link to='/resumecourse' className='bg-first-color text-white rounded-xl py-1 px-3'>Resume</Link>
                    {/* <Link to='/editcourse' className='bg-light-blue/60 text-bg-toggle rounded-xl py-1 px-3'>Review course</Link> */}

                  </div>
                </div>
              </div>
            </div> 
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={sortedCourses.length} paginate={paginate} />
      </div> 
     {/* <ReviewCourseModal isOpen={reviewModalOpen} onClose={closeReviewModal} /> */}
    </div>
  )
}

export default CourseList;