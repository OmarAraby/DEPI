import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <>
      <div className="card h-100 shadow-sm">
        <img src="img.webp" className="card-img-top" alt={post.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text flex-grow-1">
            {post.body.substring(0, 100)}...
          </p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <small className="text-muted">Views: {post.views}</small>
            <Link className="btn btn-secondary btn-sm" to={`${post.id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
