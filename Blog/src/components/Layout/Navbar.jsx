import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={""}>
            Blog
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav   mb-10 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={""}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={"tags"}>
                  Tags
                </NavLink>
              </li>

              <li className="nav-item"></li>
            </ul>
          </div>
          <button type="button" className="btn btn-outline-secondary">
            <NavLink className="nav-link" to={"add-post"}>
              Add Post
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
}
