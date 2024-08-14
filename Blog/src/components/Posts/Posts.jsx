import React from "react";
import Post from "./Post";

export default function Posts({ posts }) {
  return (
    <div className="row g-4">
      {posts.map((post, index) => {
        return (
          <div key={index} className="col-md-3">
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
}
