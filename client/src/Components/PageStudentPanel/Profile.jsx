import React, { useEffect, useState, useRef } from 'react';
import DashboardNav from './DashboardNav'
import image from "../assets/img/howitwork.png";
import { TiLocation } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { BsCheck2 } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { useCountUp } from 'use-count-up';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [accordionOpenPanels, setAccordionOpenPanels] = useState([]);
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

    const studentQueries = [
        {
            image: image,
            title: 'Machine learning Bootcamp',
            teacher: 'Brandon Taylor'
        },
        {
            image: image,
            title: 'Machine learning Bootcamp',
            teacher: 'Brandon Taylor'
        },
        {
            image: image,
            title: 'Machine learning Bootcamp',
            teacher: 'Brandon Taylor'
        },
        {
            image: image,
            title: 'Machine learning Bootcamp',
            teacher: 'Brandon Taylor'
        },
        {
            image: image,
            title: 'Machine learning Bootcamp',
            teacher: 'Brandon Taylor'
        },
        {
            image: image,
            title: 'Machine learning Bootcamp',
            teacher: 'Brandon Taylor'
        },
    ];

    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 1,
        start: 0,
        end: 65,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            reset(); 
        }, 5000);

        return () => clearTimeout(timer);
    }, [reset]);

    const toggleAccordionPanel = (panelIndex) => {
        if (accordionOpenPanels.includes(panelIndex)) {
            setAccordionOpenPanels(accordionOpenPanels.filter(index => index !== panelIndex));
        } else {
            setAccordionOpenPanels([...accordionOpenPanels, panelIndex]);
        }
    };

    
  return (
    <div className='pl-[340px] mr-[100px] mt-5'>
    <DashboardNav/>

    <div className='mt-10'>
        <p className='text-bg-toggle text-4xl font-semibold'>Profile</p>
        <p className='text-gray-600 my-1'>Welcome to Mezghena Profile page</p>
    </div>

    <div className='flex items-center gap-2'>

        <div className=' w-[30%] rounded-lg shadow-lg shadow-gray-400 mt-6'>
            <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Account</p>
            <hr className='border-2 border-blue-200'/>

            <div className='flex gap-2 items-center my-2'>
                <img src={image} className='w-14 h-14 rounded-full mx-4'/>
                <div className='flex flex-col text-left'>
                    <p className='text-bg-toggle font-bold text-2xl'>John Doe</p>
                    <p className='text-gray-600 text-md'>FullStack Developer</p>
                    <p className='text-gray-400 text-sm'>Michele.colin@gmail.com</p>
                </div>
            </div>

            <hr className='border-2 border-blue-200'/>

            <div className='flex items-center gap-2 mx-4'>
                <TiLocation className='w-8 h-8 my-3 text-bg-toggle'/>
                <p>125 Govt College Street, Monohorpur</p>
            </div>

            <hr className='border-2 border-blue-200'/>
 
            <div className='flex items-center gap-2 mx-4'>
                <TbWorld className='w-8 h-8 my-3 text-bg-toggle'/>
                <p>https://mywebsite.com</p>
            </div>
            
        </div>

        <div className=' w-[70%] rounded-lg shadow-lg shadow-gray-400 mt-6'>
            <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Student Queries</p>
            <hr className='border-2 border-blue-200'/>

            <div className='overflow-y-scroll max-h-[210px]'>
                {studentQueries.map((query, index) => (
                    <React.Fragment key={index}>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2 items-center my-2'>
                                <img src={query.image} className='w-10 h-10 rounded-full mx-4'/>
                                <div className='flex flex-col text-left'>
                                    <p className='text-bg-toggle font-bold text-lg'>{query.title}</p>
                                    <p className='text-gray-600 text-sm'>{query.teacher}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <button className='bg-green-300 rounded-full p-2'><BsCheck2 className='w-4 h-4'/></button> 
                                <button className='bg-red-300 rounded-full p-2'><BsX className='w-4 h-4'/></button>
                            </div>
                        </div>
                        {index !== studentQueries.length - 1 && <hr className='border-2 border-blue-200'/>}
                        
                    </React.Fragment> 
                ))}
            </div>
            
        </div>

    </div>

    <div className='flex items-center gap-2 mb-8'>

        <div className=' w-[70%] rounded-lg shadow-lg shadow-gray-400 mt-6'>
            <div className='flex items-center justify-between mr-5'>
                <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Account informations</p>
                <button className='text-white bg-first-color rounded-full py-1 px-5'>Edit</button>
            </div>
            <hr className='border-2 border-blue-200'/>

            <div>
                <form action="" className='flex gap-3 mx-8 my-5'>
                    <div className='w-1/2'>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="userid" className='text-first-color'>UserID</label>
                            <input type="text" placeholder='34567' readOnly className='border-none bg-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="email" className='text-first-color'>Email</label>
                            <input type="text" placeholder='email@gmail.com' className='border-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="postcode" className='text-first-color'>Post Code</label>
                            <input type="text" placeholder='34567' className='border-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="country" className='text-first-color'>Country</label>
                            <input type="text" placeholder='USA' className='border-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="website" className='text-first-color'>Website</label>
                            <input type="text" placeholder='http://johndoe.com' className='border-gray-300 rounded-xl' />
                        </div>

                    </div>

                    <div className='w-1/2'>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="fullname" className='text-first-color'>FullName</label>
                            <input type="text" placeholder='34567' className='border-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="address" className='text-first-color'>Home Address</label>
                            <input type="text" placeholder='125 college street, new york' className='border-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="city" className='text-first-color'>City</label>
                            <input type="text" placeholder='Manhattan' className='border-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="joined" className='text-first-color'>Joined since</label>
                            <input type="text" placeholder='03/12/2023' readOnly className='border-none bg-gray-300 rounded-xl' />
                        </div>

                        <div className='flex flex-col my-4'>
                            <label htmlFor="category" className='text-first-color'>Category</label>
                            <input type="text" placeholder='web development' className='border-gray-300 rounded-xl' />
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div className=' w-[30%] rounded-lg shadow-lg shadow-gray-400 mt-6'>
            <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Top Performance Courses</p>
            <hr className='border-2 border-blue-200'/>

            <div style={isOpen ? null : section} ref={ref}>
    {isOpen ? (
        studentQueries.map((query, index) => ( 
            <div key={index} className='flex items-center mx-3'> 
                <div className='flex gap-3 items-center my-2'>
                    <div>
                        <img src={query.image} className='w-20 h-16 rounded-3xl object-cover'/>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1 text-bg-toggle">{query.title}</h3>
                        <p className='text-gray-500 text-sm'>78 Registered</p>
                    </div>
                </div>
                <div>
                    <CircularProgress size="lg" determinate value={value2} style={{ color: '#FFA135' }} thickness={6}>
                        <Typography>{value2}%</Typography>
                    </CircularProgress>
                </div>
            </div>
        ))
    ) : (
        studentQueries.slice(0, 5).map((query, index) => ( 
            <div key={index} className='flex items-center mx-3'> 
                <div className='flex gap-3 items-center my-2'>
                    <div>
                        <img src={query.image} className='w-20 h-16 rounded-3xl object-cover'/>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1 text-bg-toggle">{query.title}</h3>
                        <p className='text-gray-500 text-sm'>78 Registered</p>
                    </div>
                </div>
                <div>
                    <CircularProgress size="lg" determinate value={value2} style={{ color: '#FFA135' }} thickness={6}>
                        <Typography>{value2}%</Typography>
                    </CircularProgress>
                </div>
            </div>
        ))
    )}
</div>

            <button  
                onClick={() => {
                    setIsOpen(!isOpen);
                    setAccordionOpenPanels([]);
                }} 
                className='bg-first-color text-center text-white px-12 py-2 rounded-full ml-24 my-3'
            >
                {isOpen ? "View less..." : "View more..."}
            </button>
            </div>
        </div>
    </div>

    );
};

export default Profile;