import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

const CourseList = ({ posts, loading }) => {
    if (loading) {
        return <p className='text-xl'>Loading...</p>;
    }

    const renderStars = (numReviews) => {
        const maxStars = 5;
        const minReviews = 10; // Nombre minimum de revues pour afficher un pourcentage significatif
        const percentage = Math.min((numReviews / minReviews) * 100, 100); // Calculer le pourcentage 
        const filledStars = Math.round((percentage / 100) * maxStars); // Calculer le nombre d'étoiles remplies

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
        <div className=''>
            <div className="flex flex-col gap-4">
                {posts.map((course, index) => (
                    <div className='flex flex-col md:flex-row' key={index}>
                        <div className='flex flex-row gap-3'>
                            <Link to={`/CourseID/${course.id}`} className=''>
                                <img className="w-80 h-40 rounded-lg" src={course.image} alt={course.name} />
                            </Link>
                            <div>
                                <p className='font-bold text-lg text-first-color'>{course.title}</p>
                                <p className='text-sm'>{course.description}</p>
                                <p className='text-xs text-gray-500 my-2'>{course.professor}</p>

                                {/* Display course rating */}
                                <div className="flex gap-1 items-center">
                                    {renderStars(course.numReviews)}
                                    <span className="text-gray-500 text-xs">({course.numReviews})</span>
                                </div>

                                <div className='flex gap-2 mt-2 text-gray-500 text-xs'>
                                    <p>{course.duration} Hours •</p>
                                    <p>{course.session} Session •</p>
                                    <p>{course.level}</p>
                                </div>

                                <div className="flex gap-1">
                                    <button className='bg-61B4F2 text-dark-blue rounded-full px-14 py-1 text-sm mt-2 hover:bg-first-color/30'>Best Seller</button>
                                    <button className='bg-second-color/40 text-dark-blue rounded-full px-12 py-1 text-sm mt-2 hover:bg-second-color'>Recommended</button>
                                    <button className='flex items-center gap-1 bg-second-color text-dark-blue rounded-full px-6 py-1 text-sm mt-2 hover:bg-second-color/50'>Add to favorite <CiHeart /></button>
                                </div>
                            </div>
                            <div className='text-first-color font-semibold'>
                                ${course.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
