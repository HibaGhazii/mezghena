import React, { useEffect, useState, useRef } from 'react';
import image from '../assets/img/card.png'
import { FaPeopleLine } from "react-icons/fa6";
import { BiSolidHeartCircle } from "react-icons/bi";

const LessonDesc = () => {
  const purshasedCourse = [
    {
      image: image,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit.",
      instructor: "John Doe",
      hours: 67,
      promo: 98,
      price: 120,
      people: 33200,
    },
    {
      image: image,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit.",
      instructor: "John Doe",
      hours: 67,
      promo: 98,
      price: 120,
      people: 33200,
    },
    {
      image: image,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit.",
      instructor: "John Doe",
      hours: 67,
      promo: 98,
      price: 120,
      people: 33200,
    },
    {
      image: image,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit.",
      instructor: "John Doe",
      hours: 67,
      promo: 98,
      price: 120,
      people: 33200,
    },

  ]
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);

  const section = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  };

  return (
    <div>
      <div>
        <div>
            <p className='text-2xl font-semibold text-center md:text-left mt-8'>Prerquisities</p>
            <ul className='list-disc pl-4 my-2'>
                <li>No prior knowledge is required.</li>
                <li>You can use a Windows PC or a MAC</li>
                <li>All the software used is free.</li>
                <li>You can take this course even if you only have 2 hours of weekly time to dedicate to it.</li>
            </ul>
        </div>

        <div>
            <p className='text-2xl font-semibold text-center md:text-left mt-8 mb-1'>Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisl ac fringilla posuere, urna urna pellentesque nulla, at rutrum justo libero eu nulla. In hac habitasse platea dictumst. Nullam non urna eu libero consequat vulputate. Vivamus vel urna vel felis sollicitudin auctor.</p>
            <p  className='text-xl font-semibold text-center md:text-left mt-6'>This course is for:</p>
            <ul style={isOpen ? null : section} ref={ref} className='list-disc pl-4 my-2'>
                <li>No prior knowledge is required.</li>
                <li>You can use a Windows PC or a MAC</li>
                <li>All the software used is free.</li>
                <li>You can take this course even if you only have 2 hours of weekly time to dedicate to it.</li>
                <li>No prior knowledge is required.</li>
                <li>You can use a Windows PC or a MAC</li>
                <li>All the software used is free.</li>
                <li>You can take this course even if you only have 2 hours of weekly time to dedicate to it.</li>
            </ul>
            <button onClick={() => setIsOpen(!isOpen)} className='text-md text-first-color rounded-lg'>
                {isOpen ? "View less..." : "View more..."}
            </button>
        </div>

        
      </div>

      <div className=' text-center md:text-left mt-8'>
        <p className='text-2xl font-semibold mb-4'>What The participants also purchased</p>
        <div className='flex flex-col gap-4 text-sm'>
          {purshasedCourse.map((course, index) => (
            <div key={index} className='flex gap-4'> 
              <div className='w-24 h-16'>
                <img src={course.image} alt={course.title} className='' />
              </div>

              <div>
                <p>{course.title}</p>
                <p>{course.instructor}</p>
                <p><span className='text-first-color'>{course.hours} hours in total •</span> Update 11/2023</p>
                
              </div>

              <div className='flex gap-8'>
                <div className='flex gap-1'>
                  <FaPeopleLine className='text-bg-toggle mt-0.5'/>
                  {course.people}
                </div>
                <div className='flex flex-col'>
                  <p className='text-light-blue font-bold'>${course.promo}</p>
                  <p className='text-gray-500 line-through'>${course.price}</p>
                </div>
              </div>

              <div>
                <BiSolidHeartCircle  className='text-light-blue/40 h-10 w-10 shadow-lg rounded-full'/>
              </div>
              
            </div>
          
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default LessonDesc 