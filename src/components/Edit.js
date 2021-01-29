import React from "react";
import { useGlobalContext } from "./context";

const Edit = () => {
  const {
    postId,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    showEditModal,
    closeEditModal,
  } = useGlobalContext();

  const saveEdit = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: postId,
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
      .then(closeEditModal());
  };

  return (
    <>
      <div
        className={`${showEditModal ? "modal show" : "modal"}`}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bolder">Edit Post</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => closeEditModal()}
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mt-2">
                <textarea
                  className="form-control body-textarea"
                  id="body"
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                />
                <label htmlFor="body">Body</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light fw-bold"
                onClick={() => closeEditModal()}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary fw-bold"
                onClick={saveEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
