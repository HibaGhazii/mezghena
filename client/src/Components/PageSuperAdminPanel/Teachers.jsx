import React, { useState } from 'react';
import DashboardNav from './DashboardNav';
import image from "../assets/img/howitwork.png";
import Pagination from '../Pagecours/Pagination';
import { BsCheck2,BsX } from "react-icons/bs";

const Teachers = () => {
  
  const teachers = {
    list: [
      {
        id: 1,
        image: image,
        age:25,
        name: 'John Doe',
        course: 'Front-end with React.js',
        startedSince: '2023/01/01',
        finishedAt: '2023/06/30',
        price: '$200',
        state: 'Admitted',
        state2: 'Requesting',
        state3: 'Rejected'
      },
      {
        id: 2,
        image: image,
        age:25,
        name: 'John Doe',
        course: 'Front-end with React.js',
        startedSince: '2023/01/01',
        finishedAt: '2023/06/30',
        price: '$200',
        state: 'Admitted',
        state2: 'Requesting',
        state3: 'Rejected'
      },
      {
        id: 3,
        image: image,
        age:25,
        name: 'John Doe',
        course: 'Front-end with React.js',
        startedSince: '2023/01/01',
        finishedAt: '2023/06/30',
        price: '$200',
        state: 'Admitted',
        state2: 'Requesting',
        state3: 'Rejected'
      },
      {
        id: 4,
        image: image,
        age:25,
        name: 'John Doe',
        course: 'Front-end with React.js',
        startedSince: '2023/01/01',
        finishedAt: '2023/06/30',
        price: '$200',
        state: 'Admitted',
        state2: 'Requesting',
        state3: 'Rejected'
      },
      {
        id: 5,
        image: image,
        age:25,
        name: 'John Doe',
        course: 'Front-end with React.js',
        startedSince: '2023/01/01',
        finishedAt: '2023/06/30',
        price: '$200',
        state: 'Admitted',
        state2: 'Requesting',
        state3: 'Rejected'
      },
      {
        id: 6,
        image: image,
        age:25,
        name: 'John Doe',
        course: 'Front-end with React.js',
        startedSince: '2023/01/01',
        finishedAt: '2023/06/30',
        price: '$200',
        state: 'Admitted',
        state2: 'Requesting',
        state3: 'Rejected'
      },
    ]
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentteachers = teachers.list.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='pl-[340px] mr-[100px] mt-5'>
      <DashboardNav/>
      <div className='mt-10'>
        <p className='text-bg-toggle text-4xl font-semibold'>Teachers</p>
        <p className='mt-1'>View your Teachers here</p>
      </div>

      <div className='rounded-lg shadow-lg shadow-gray-400 mt-6'>
        <p className='text-bg-toggle text-xl font-semibold py-4 px-6'>Teachers List</p>
        <hr className='border-gray-400'/> 

        <div className='mx-4'>
          <table className='w-full text-center'> 
            <thead className='text-gray-500'> 
              <tr className='border-b'> 
                <th className='py-2 font-normal'>Teacher</th> 
                <th className='py-2 font-normal'>Course</th>
                <th className='py-2 font-normal'>Started since</th>
                <th className='py-2 font-normal'>Finished at</th>
                <th className='py-2 font-normal'>Price</th>
                <th className='py-2 font-normal'>State</th>
                <th className='py-2 font-normal'>Approval/View</th>
              </tr> 
            </thead>
            <tbody className='font-bold'>
              {currentteachers.map((student, index) => (
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
                    <td className='py-4'>{student.finishedAt}</td>
                    <td className='py-4'>{student.price}</td>
                    <td className='py-4'>
                      <button className='text-green-500 bg-emerald-200 py-1 px-6 rounded-full'>{student.state}</button>
                      <button className='text-blue-500 bg-blue-200 py-1 px-6 rounded-full'>{student.state2}</button>
                      <button className='text-red-500 bg-red-200 py-1 px-6 rounded-full'>{student.state3}</button>
                    </td>
                    <td className='py-4 flex flex-col justify-center items-center'>
                      <button className='bg-first-color text-white px-5 py-1 rounded-3xl'>View details</button>
                        <div className='flex items-center gap-3'>
                            <button className='bg-green-300 rounded-full p-2'><BsCheck2 className='w-4 h-4'/></button> 
                            <button className='bg-red-300 rounded-full p-2'><BsX className='w-4 h-4'/></button>
                        </div>
                    </td>
                  </tr>
                  {index !== teachers.list.length - 1 && <tr><td colSpan="7" className="border-b border-gray-400"></td></tr>}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={teachers.list.length} paginate={paginate} />
    </div>
  );
};

export default Teachers;
