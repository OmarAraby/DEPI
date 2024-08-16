import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Posts from "../Pages/Posts";
import AllTags from "../Tags/AllTag";
import PostsPagination from "../Pagination/PostsPagination";
import { Context } from "../Context/Context";

export default function Home() {
  const { posts, setOrderBy, handlingOdring } = useContext(Context);

  function isPostsEmpty() {
    return posts.length == 0;
  }
  return (
    <>
      <div className="text-center">
        <AllTags />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <a>
              <li
                onClick={() => {
                  setOrderBy("asc");
                  handlingOdring("asc");
                }}
              >
                Asending
              </li>
            </a>
            <a>
              <li
                onClick={() => {
                  setOrderBy("desc");
                  handlingOdring("desc");
                }}
              >
                Descinding
              </li>
            </a>
          </ul>
        </div>

        <h1>latest Posts</h1>
      </div>

      {isPostsEmpty() ? <Loading /> : <Posts posts={posts} />}
      <PostsPagination />
    </>
  );
}
