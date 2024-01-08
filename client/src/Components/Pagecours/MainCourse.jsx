import React,{ useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import Filter from './Filter';
import PopularCourses from './PopularCourses';
import CourseList from './CourseList';
import axios from 'axios';
import Pagination from './Pagination'; 


const MainCourse = () => {
    const category = [
        {
            name: "Design",
            image: "/img/design.svg"

        },
        {
            name: "Development",
            image: "/img/developpement.svg"
            
        },
        {
            name: "Photography",
            image: "/img/photo.svg"
            
        },
        {
            name: "Marketing",
            image: "/img/marketing.svg"
            
        },
        {
            name: "Business",
            image: "/img/business.svg"
            
        },
        {
            name: "Data Science",
            image: "/img/data.svg"
            
        },
        {
            name: "Design",
            image: "/img/design.svg"

        },
        {
            name: "Development",
            image: "/img/developpement.svg"
            
        },
        {
            name: "Photography",
            image: "/img/photo.svg"
            
        },
        {
            name: "Marketing",
            image: "/img/marketing.svg"
            
        },
        {
            name: "Business",
            image: "/img/business.svg"
            
        },
        {
            name: "Music",
            image: "/img/data.svg"
            
        },
    ];

    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage]=useState(6);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3000/courseList');
            setPosts(res.data);
            setLoading(false);

        };
        fetchPosts();
    }, []);
    

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //const totalPosts = (posts.length / postsPerPage);

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
  return (
    <div className='flex flex-col md:mx-16 mx-2'>
        <div className='flex flex-col'>
            <div className='mt-8'>
                <p className='text-2xl font-semibold'>Most <span className='text-bg-toggle'>Popular Categories</span></p><img src="/img/ligneOrange.svg" className='ml-14 w-24'/>
                <p className='text-sm text-gray-500 pb-5'>Various versions have evolved over the years, sometimes by accident,</p>
                <div class="grid w-full gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
                        
                    {category.map((item, index) => (
                        
                        <Link to='category' onClick={()=>{}} className=' cursor-pointer'>
                            <div key={index} className='flex justify-between items-center gap-8  w-full p-3 text-gray-500 shadow-lg rounded-lg peer-checked:bg-bg-toggle dark:border-first-color peer-checked:border-first-color peer-checked:text-white hover:bg-bg-toggle hover:text-white hover:border-first-color'>
                                <div className='flex gap-2 items-center'>
                                    <img src={item.image} className='w-6 h-6'/> 
                                    {item.name}
                                </div>
                                <img src="/img/arrowCourse.svg" className='hover:bg-second-color rounded-sm hover:text-white'/>
                            </div>  
                        </Link>
                    ))}
                </div>
            </div>
            
            <div>
                <PopularCourses/>
            </div>
           
        </div>

        


        <div className='flex flex-col md:flex-row mt-12' id='category'>

            <div className='basis-[350px] md:basis-[250px] xl:basis-[400px]'>
                <Filter/> 
            </div>
            
            <div className='mt-16 md:w-3/4 flex flex-col flex-1 '>
                <div className='md:absolute -bottom-[540px] md:hidden'>
                    <p className='text-first-color bg-white border border-first-color border-1 font-semibold px-8 py-2.5 rounded-md my-5 md:my-0 text-center'>Courses</p>
                </div>
                
                <CourseList posts={currentPosts} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>

        </div>
    </div>
  )
}

export default MainCourse
