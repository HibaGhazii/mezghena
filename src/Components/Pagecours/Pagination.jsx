import React from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';

const Pagination = () => {
  const handlePageClick = (selectedPage) => {
    // Handle page change logic here
    console.log('Selected Page:', selectedPage);
    // Update the list of courses based on the selected page
    // You might want to fetch data or filter the existing data accordingly
  };

  return (
    <div>
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          <span className='w-10 h-10 flex items-center justify-center font-semibold text-bg-toggle rounded-md'>
            <BsChevronBarRight />
          </span>
        }
        onPageChange={(selectedPage) => handlePageClick(selectedPage.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={20}
        previousLabel={
          <span className='w-10 h-10 flex items-center justify-center font-semibold text-bg-toggle rounded-md'>
            <BsChevronBarLeft />
          </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block w-8 h-8 flex items-center justify-center hover:text-bg-toggle'
        activeClassName='bg-61B4F2/50 rounded-md'
      />
    </div>
  );
};

export default Pagination;
