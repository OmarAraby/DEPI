import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <>
      <div className="border bg-white h-[350px]">
        <div className="p-4 text-center">
          <img className="w-100" src="img.webp" alt="" />
          <h4 className="text-md font-medium">{post.title}</h4>
          <p className="text-sm">{post.body}</p>
          <p>Views: {post.views}</p>
          <button type="button" className="btn btn-info">
            <Link className="" to={""}>
              Open Post
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
