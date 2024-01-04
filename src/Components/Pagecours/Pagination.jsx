import React from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';


const Pagination = ({postsPerPage, totalPosts, paginate}) => {

  const pageNumber = [];
  for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <div>
     <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          <span className='w-10 h-10 flex items-center justify-center font-semibold text-bg-toggle rounded-md'>
            <BsChevronBarRight />
          </span>
        }
        pageRangeDisplayed={postsPerPage}
        pageCount={Math.ceil(totalPosts / postsPerPage)}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center font-semibold text-bg-toggle rounded-md'>
            <BsChevronBarLeft />
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='flex w-8 h-8 items-center justify-center hover:text-bg-toggle'
        activeClassName='bg-61B4F2/50 rounded-md'

        onPageChange={(selectedPage) => paginate(selectedPage.selected + 1)}
      />

      
      {/* <nav>
        
      <ul className='flex items-center justify-center mt-8 mb-4'>

        <button className='w-10 h-10 flex items-center justify-center font-semibold text-bg-toggle rounded-md'>
            <BsChevronBarLeft />
        </button>

        {pageNumber.map(number => (
          <li key={number} className='flex w-8 h-8 items-center justify-center hover:text-bg-toggle'>
            <a onClick={() => paginate(number)} className='active:text-61B4F2/50 rounded-md'>
              {number}
            </a>
          </li>
          
        ))}

        <button className='w-10 h-10 flex items-center justify-center font-semibold text-bg-toggle rounded-md'>
            <BsChevronBarRight />
        </button>
      </ul>
    </nav> */}
    </div>
  );
};

export default Pagination;
