import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useGlobalContext } from "./context";

import Comments from "./Comments";

const Post = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    setPostId,
    setPostTitle,
    setPostBody,
    openEditModal,
  } = useGlobalContext();

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .then(window.scrollTo(0, 0));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container mt-2">
        <div className="row mb-1">
          <div className="col">
            <button
              className="btn fw-bold btn-lg btn-back"
              onClick={() => history.push("/")}
            >
              <i className="fas fa-undo fa-sm"></i> Back
            </button>
          </div>
          <div className="single-post-buttons d-flex align-items-center">
            <button
              className="btn btn-md icon fw-bold btn-sm"
              onClick={() => {
                setPostId(post.id);
                setPostTitle(post.title);
                setPostBody(post.body);
                openEditModal();
              }}
            >
              <i className="far fa-edit text-dark"></i> Edit
            </button>
            <button className="btn btn-md icon fw-bold btn-sm">
              <i className="far fa-trash-alt text-danger"></i> Remove
            </button>
          </div>
        </div>

        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="image">
              <img src="https://picsum.photos/150" alt="post" />
            </div>
            <div className="col card-col d-flex align-items-center">
              <div className="card-body">
                <h4 className="card-title fw-bold">{post.title}</h4>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments id={id} />
    </>
  );
};

export default Post;
