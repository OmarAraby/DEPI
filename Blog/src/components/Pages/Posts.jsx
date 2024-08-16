import React, { useContext } from "react";
import Post from "./Post";
import PostsPagination from "../Pagination/PostsPagination";
import { Context } from "../Context/Context";

export default function Posts({ posts }) {
  return (
    <>
      <div className="row g-4">
        {posts.map((post, index) => {
          return (
            <div key={index} className="col-md-3">
              <Post post={post} key={post.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}
