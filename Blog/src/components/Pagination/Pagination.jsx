import { Fragment, useContext, useState } from "react";

import ReactPaginate from "react-paginate";

import { Context } from "../Context/Context";

function Items({ currentItems }) {
  const { setTag } = useContext(Context);

  return (
    <div className="row g-2">
      {currentItems &&
        currentItems.map((item, i) => (
          <Fragment key={i}>
            <div className="col-1 mx-4">
              <button
                className="btn btn-outline-secondary rounded-3 shadow-sm p-3"
                onClick={() => {
                  setTag(item.slug);
                }}
              >
                {item.slug}
              </button>
            </div>
          </Fragment>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <div className=" sm:max-sm:">
      <Items currentItems={currentItems} className="" />
      <div className="fixed top-16 w-100 d-flex justify-content-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
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

export default Pagination;
