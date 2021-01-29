import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "./context";

const Posts = () => {
  const history = useHistory();
  const {
    postsToShow,
    setPostsToShow,
    posts,
    loading,
    openEditModal,
    setPostId,
    setPostTitle,
    setPostBody,
  } = useGlobalContext();

  // Load More ღილაკზე დაჭერის შემდეგ დასამატებელი რაოდენობა
  const nextPosts = 4;

  // აქ უბრალოდ hide კლასს (display:none) ვამატებ სქრინზე წაშლის ეფექტისთვის
  const [selected, setSelected] = useState([]);
  const handleRemove = (id) => {
    setSelected((s) => [...s, id]);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center my-4">
        {loading ? (
          <h2 className="mb-4">Loading...</h2>
        ) : (
          <>
            {posts.slice(0, postsToShow).map((post) => {
              return (
                <div
                  className={`home-card card mb-3 w-100 ${
                    selected.includes(post.id) && "hide"
                  }`}
                  key={post.id}
                >
                  <div className="row g-0">
                    <div className="image">
                      <img src="https://picsum.photos/150" alt="post" />
                    </div>
                    <div
                      className="col card-col d-flex align-items-center"
                      onClick={() => history.push(`/post/${post.id}`)}
                    >
                      <div className="card-body">
                        <h4 className="card-title fw-bold">
                          {post.title.charAt(0).toUpperCase() +
                            post.title.slice(1)}
                        </h4>
                        <p className="card-text">{post.body}</p>
                        <p className="card-text">
                          <small className="text-secondary comments rounded-pill fw-bold">
                            Comments
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="icons">
                      <button
                        className="btn btn-md icon fw-bold"
                        onClick={() => {
                          setPostId(post.id);
                          setPostTitle(post.title);
                          setPostBody(post.body);
                          openEditModal();
                        }}
                      >
                        <i className="far fa-edit text-dark"></i> Edit
                      </button>
                      <button
                        className="btn btn-md icon fw-bold"
                        onClick={() => handleRemove(post.id)}
                      >
                        <i className="far fa-trash-alt text-danger"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <button
              className="btn btn-light fw-bold"
              onClick={() => setPostsToShow(postsToShow + nextPosts)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Posts;
