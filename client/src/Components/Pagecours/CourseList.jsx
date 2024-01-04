import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CourseList = ({posts,loading}) => {
  
    if(loading){
      return <p className='text-xl'>Loading...</p>
    }

  return (
                <div className=''>
                    <div className="flex flex-col gap-4">
                        {posts.map((course, index) => (
                            <Link to='/CourseID' className='flex flex-col md:flex-row' key={index}> 

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
                                    
                            </Link>
                        ))}
                        
                    </div>
                </div>

  );
};

export default CourseList;
