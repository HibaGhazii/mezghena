import React, { useEffect, useState, useRef } from 'react';

const LessonDesc = () => {
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

        <div>
            {/* <p>What The participants also purchased</p> */}

        </div>
    </div>
  )
}

export default LessonDesc 