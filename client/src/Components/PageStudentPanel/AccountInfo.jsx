import React, { useState, useEffect } from 'react'; 
import DashboardNav from './DashboardNav';
import image from '../assets/img/howitwork.png';
import profile from '../assets/img/card.png';
import { CiHeart } from "react-icons/ci";
import Pagination from '../Pagecours/Pagination';

const AccountInfo = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            
            const lessons = [
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
            ];
            setPosts(lessons);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='pl-[400px] mr-[100px] my-4'>
            <DashboardNav /> 

            <div className='rounded-lg shadow-lg shadow-gray-400 mt-16'> 
                {/* Your profile information */}
                <div className='text-center flex flex-col justify-center items-center gap-2 mb-8 pt-16'>  
                    <img src={profile} className='w-24 h-24 rounded-[40px]'/> 
                    <p className='text-bg-toggle font-bold text-4xl'>Micheal John</p>
                    <p className='text-sm'>Manhattan, USA</p>  
                    <p className='bg-bg-toggle text-white py-1 px-2 rounded-lg text-xs'>INSTRUCTOR</p>
                    <button className='bg-second-color text-black rounded-full py-1 px-5 flex items-center gap-1'>Add to favorite <CiHeart className='w-4 h-4'/></button>
                </div>

                {/* Horizontal line */}
                <hr className='border-gray-500 mx-20'/>

                {/* Courses Purchases n° */}
                <div className='text-center my-4 flex flex-col items-center'>
                    <p>Courses Purchases n°:</p>
                    <p className='bg-bg-toggle text-white py-1 px-2 my-1 rounded-lg text-xs'>299</p>
                </div>

                {/* Horizontal line */}
                <hr className='border-gray-500 mx-20'/>

                {/* Courses section */}
                <div className='mx-20 py-4'>
                    <p className='text-bg-toggle font-semibold text-3xl my-2'>Courses by Micheal</p> 

                    <div className='mt-4 grid grid-cols-2 gap-4 pb-4'> 
                        {currentPosts.map((lesson, index) => (
                            <div key={index} className='shadow-xl rounded-lg p-2'>
                                <div className='flex items-center gap-2'> 
                                    <img src={lesson.image} alt={lesson.title} className='w-20 h-20 object-cover rounded-2xl'/>
                                    <div>
                                        <h2 className='text-lg my-1 font-bold text-bg-toggle'>{lesson.title}</h2>
                                        <p className='text-gray-600 text-sm mb-5 mr-10'>{lesson.description}</p>  
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    
                </div>
                
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    );
}

export default AccountInfo;
