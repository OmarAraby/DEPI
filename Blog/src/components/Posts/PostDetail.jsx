import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { api } from "../Utils/axios";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [post, loading] = useFetch(id);
  console.log(post);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      let response = await api.delete(`${id}`, post);
      console.log(response);

      navigate(`/`);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-4">{post.title}</h2>
            <p className="card-text lead">{post.body}</p>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p className="text-muted mb-0">
                <small>Views: {post.views}</small>
              </p>
              <div className="text-muted mb-0">
                <Link
                  className="btn btn-outline-secondary  ms-4"
                  to={`/edit/${post.id}`}
                >
                  <i className="fas fa-edit me-1"></i>
                  Edit Post
                </Link>
                <Link
                  className="btn btn-outline-danger  ms-4"
                  onClick={handleDelete}
                >
                  <i className="fas fa-trash me-1"></i>
                  Delete Post
                </Link>
              </div>

              <div className="">
                <button className="btn btn-outline-primary m-2">
                  <i className="fa-regular fa-thumbs-up"> </i>
                  <span>{post.reactions?.likes}</span>
                </button>
                <button className="btn btn-outline-primary m-2">
                  <i className="fa-regular fa-thumbs-down"></i>
                  <span>{post.reactions?.dislikes}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
