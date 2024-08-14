import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="text-center py-5">
        <h1 className="mb-4">404</h1>
        <h1>Page Not Found</h1>
        <Link className="" to={""}>
          Back to Home
        </Link>
      </div>
    </>
  );
}
