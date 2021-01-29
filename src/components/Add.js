import React from "react";
import { useGlobalContext } from "./context";

const Add = () => {
  const {
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    showAddModal,
    closeAddModal,
  } = useGlobalContext();

  const handleAdd = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(closeAddModal());
  };
  return (
    <>
      <div className={`${showAddModal ? "modal show" : "modal"}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bolder">Add New Post</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => closeAddModal()}
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={postTitle}
                  placeholder="New Post Title"
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mt-2">
                <textarea
                  className="form-control body-textarea"
                  id="body"
                  value={postBody}
                  placeholder="New Post Body"
                  onChange={(e) => setPostBody(e.target.value)}
                />
                <label htmlFor="body">Body</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light fw-bold"
                onClick={() => closeAddModal()}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary fw-bold"
                onClick={handleAdd}
              >
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
