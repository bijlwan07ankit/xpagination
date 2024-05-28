import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="BtnDiv">
      <button onClick={goToPrevPage}>Previous</button>
      <h5 className="page">{currentPage}</h5>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;