import React from "react";
import { Link } from "react-router-dom";

interface PaginationProps {
  nPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<any>>
}

const Pagination: React.FC<PaginationProps> = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav className="flex justify-center py-10">
      <ul className="flex gap-6">
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`px-6 border transition-all ease-out  py-4 font-lato  ${
              currentPage == pgNumber
                ? "border-none bg-[#0096C1] text-primary"
                : "hover:bg-[#0096C1] hover:border-[#ffffff] hover:text-primary bg-transparent text-[#828282] border-[#828282]"
            } `}
          >
            <Link
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              to="#"
            >
              {pgNumber}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
