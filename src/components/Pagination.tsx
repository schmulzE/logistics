import React, {useState, useEffect, useContext} from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import Post from './Post';
import { PostProps } from '../pages/Blog';


type IProps = {
  data: PostProps[],
  pageLimit: number,
  dataLimit: number
}

const Pagination: React.FC<IProps> = ({ data, pageLimit, dataLimit }) => {
  // const router  =useRoutes()
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);


  function goToNextPage(): void {
    setCurrentPage((page: number) => page + 1)
    // router.push(`?page=2`, undefined, { shallow: true })
  }
  
  function goToPreviousPage() {
    setCurrentPage((page: number) => page - 1)
    // router.push(`?page=1`, undefined, { shallow: true })
  }

  function changePage(event: React.ChangeEvent<HTMLInputElement>) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  console.log(getPaginatedData().map(post => console.log(post.id)));
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx): number => start + idx + 1);
  };

  return (
    <div>

      {/* show the posts, 30 posts at a time */}
      <Post posts={getPaginatedData()}/>
      

      {/* show the pagination
          it consists of next and previous buttons
          along with page numbers, in our case, 2 page
          numbers at a time
      */}
      <div className="pagination text-center">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        <FaChevronLeft/>
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item: number, index: number) => (
        <button
          key={index}
          onClick ={(event: React.MouseEvent) => changePage}
          className={`paginationItem ${currentPage === item ? 'p-2 font-black' : null}`}
        >
          <span className='m-5'>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        <FaChevronRight/>
      </button>
    </div>
  </div>
  );
}

export default Pagination