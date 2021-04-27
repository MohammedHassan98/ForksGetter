import React from 'react'

interface Props {
    ForksPerPage: number;
    totalForks: number;
    paginate: any
}

const Pagination: React.FC <Props> = ({ ForksPerPage, totalForks, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalForks / ForksPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;