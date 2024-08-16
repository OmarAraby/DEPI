import ReactPaginate from "react-paginate";

import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";

function PostsPagination() {
  const { totalCounts, postsPaginationClick } = useContext(Context);
  const [pageCount, setPageCount] = useState(20);

  const handlePage = (e) => {
    postsPaginationClick(e.selected + 1);
  };
  useEffect(() => {
    setPageCount(Math.ceil(totalCounts / 20));
  }, [totalCounts]);
  console.log("Total Counts:", totalCounts);
  return (
    <div>
      <div className="">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePage}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="prev"
          renderOnZeroPageCount={null}
          containerClassName={"pagination justify-content-center mt-4"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default PostsPagination;
