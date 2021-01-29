import React, { useState, useEffect } from "react";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComments(json));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2 className="my-2 px-2 fw-bold">Comments</h2>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="card comment mb-3">
            <div className="card-header border">
              <span className="fw-bold">Name:</span> {comment.name}{" "}
              <span className="fw-bold"> Email:</span> {comment.email}
              <small className="text-muted float-end fw-bold">Reply</small>
            </div>
            <div className="card-body">{comment.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
