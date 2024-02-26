import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Payment from './Payment';

const HeroSectionCourseID = ({ rating, numReviews }) => {

    const renderStars = (percentage) => {
        const maxStars = 5;
        const filledStars = Math.round((percentage / 100) * maxStars);

        const stars = [];

        for (let i = 0; i < maxStars; i++) {
            if (i < filledStars) {
                stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
            }
        }

        return stars;
    };

    return (
        <div className="text-white flex flex-col items-center md:flex-row pb-12 pt-24 md:pt-32 bg-[url('../src/Components/assets/img/Hero-Section.png')] rounded-b-[60px] bg-cover">
      
            <div className='md:w-[60%] flex flex-col gap-5 pt-10'>
                <div className='flex ml-10 md:ml-44'>
                    <div className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2 font-normal">
                            <li>
                                <Link to="/" className="text-second-color flex items-center">
                                    <p>Home</p> 
                                    <IoIosArrowForward className='mt-1'/>
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="text-second-color flex items-center">
                                    <p>Courses</p> 
                                    <IoIosArrowForward className='mt-1'/>
                                </Link>
                            </li>
                            <li className=''>programming language</li>
                        </ol>
                    </div>
                </div>

                <div className='flex flex-col mx-10 md:ml-44 gap-3'>
                    <p className='text-4xl font-bold text-light-blue'>Learn Python from scratch course</p>
                    <p className='text-sm'>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p>
                    <div className='flex gap-6 text-sm'>
                        <p>Made by <span className='text-second-color'>Gallen Collignon</span></p>
                        <p>Participants: <span className='text-second-color'>3345</span></p>
                    </div>
                    <div className="flex items-center gap-1">
                        {renderStars((rating / 5) * 100)} {/* Calculate percentage */}
                        <span className="text-second-color text-sm"> ({numReviews})</span>
                    </div>
                </div>
            </div>

            <Payment/>
     
        </div>
    );
}

export default HeroSectionCourseID;
