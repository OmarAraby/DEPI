import React, { useState } from "react";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputText1" className="form-label">
            Description
          </label>
          <textarea
            type="textarea"
            className="form-control"
            id="exampleInputText1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
