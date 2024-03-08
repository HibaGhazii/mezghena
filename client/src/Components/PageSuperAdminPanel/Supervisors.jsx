import React, { useState } from 'react';
import DashboardNav from './DashboardNav';
import image from "../assets/img/howitwork.png";
import Pagination from '../Pagecours/Pagination';

const Supervisors = () => {

        const students = {
            list: [
              {
                id: 1,
                image: image,
                age:25,
                name: 'John Doe',
                course: 'Design',
                startedSince: '2023/01/01',
                courseNumber: '34',
                price: '$200',
                state: 'Admitted',
                state2: 'Deleted'
              },
              {
                id: 2,
                image: image,
                age:25,
                name: 'John Doe',
                course: 'Design',
                startedSince: '2023/01/01',
                courseNumber: '34',
                price: '$200',
                state: 'Admitted',
                state2: 'Deleted'
              },
              {
                id: 3,
                image: image,
                age:25,
                name: 'John Doe',
                course: 'Design',
                startedSince: '----',
                courseNumber: '----',
                price: '----',
                state: 'Admitted',
                state2: 'Deleted'
              }
              
            ]
        }
    
      const [currentPage, setCurrentPage] = useState(1);
      const [postsPerPage] = useState(4);
    
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentStudents = students.list.slice(indexOfFirstPost, indexOfLastPost);
    
      const paginate = pageNumber => setCurrentPage(pageNumber);

  return ( 
    <div className='pl-[340px] mr-[100px] mt-5'>
      <DashboardNav/>
      <div className='flex justify-between items-center mt-10'>
        <div> 
            <p className='text-bg-toggle text-4xl font-semibold'>Supervisors</p>
            <p className='mt-1'>View your colleagues here</p>
        </div>
        <div> 
            <button className='rounded-3xl bg-first-color text-white px-8 py-1'>Add Supervisor +</button>
        </div>
      </div>

      <div className='rounded-lg shadow-lg shadow-gray-400 mt-3'>
        <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Students List</p>
        <hr className='border-gray-400'/> 

        <div className='mx-4'>
          <table className='w-full text-center'> 
            <thead className='text-gray-500'> 
              <tr className='border-b'> 
                <th className='py-2 font-normal'>Teacher</th> 
                <th className='py-2 font-normal'>Category</th>
                <th className='py-2 font-normal'>Admition date</th>
                <th className='py-2 font-normal'>Course N°</th>
                <th className='py-2 font-normal'>Revenue</th>
                <th className='py-2 font-normal'>State</th>
                <th className='py-2 font-normal'>Approval/View</th>
              </tr> 
            </thead>
            <tbody className='font-bold'>
              {currentStudents.map((student, index) => (
                <React.Fragment key={student.id}>
                  <tr>
                    <td className='py-2'>
                      <div className='flex gap-2'>
                        <img src={student.image} alt={student.name} className='w-10 h-10 rounded-full mx-4'/>
                        <div className='flex flex-col text-left'>
                          <p className='text-bg-toggle'>{student.name}</p>
                          <p className='text-gray-500 text-sm font-medium'>{student.age}yo</p>
                        </div>
                      </div>
                    </td>
                    <td className='py-4'>{student.course}</td>
                    <td className='py-4'>{student.startedSince}</td>
                    <td className='py-4'>{student.courseNumber}</td>
                    <td className='py-4'>{student.price}</td>
                    <td className='py-4'>
                      <button className='text-green-500 bg-emerald-200 py-1 px-6 rounded-full'>{student.state}</button>
                      <button className='text-red-500 bg-red-200 py-1 px-6 rounded-full'>{student.state2}</button>
                    </td>
                    <td className='py-4'>
                      <button className='bg-first-color text-white px-5 py-1 rounded-3xl'>View details</button>
                      
                    </td>
                  </tr>
                  {index !== students.list.length - 1 && <tr><td colSpan="7" className="border-b border-gray-400"></td></tr>}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={students.list.length} paginate={paginate} />
    </div>
  )
}

export default Supervisors
