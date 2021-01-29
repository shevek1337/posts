import React from "react";
import { useGlobalContext } from "./context";

const Inputs = () => {
  const {
    searchInput,
    setSearchInput,
    posts,
    openAddModal,
    setPostTitle,
    setPostBody,
  } = useGlobalContext();
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // Live search filter
  let filteredPosts = [];
  if (searchInput.length > 1) {
    filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().match(searchInput.toLowerCase());
    });
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-lg-auto col-sm-12 order-sm-2">
            <button
              onClick={() => {
                setPostTitle("");
                setPostBody("");
                openAddModal();
              }}
              type="button"
              className="btn btn-lg btn-primary w-100 fw-bolder"
            >
              <i className="fas fa-plus fa-sm"></i> Add Post
            </button>
          </div>
          <div className="col-lg col-sm-12 order-sm-1">
            <div className="input-group">
              <span className="fas fa-search fa-lg search-icon"></span>
              <input
                onChange={handleInputChange}
                id="search-input"
                type="search"
                className="form-control form-control-lg rounded"
                placeholder="Type to search for posts..."
              />
              <div className="search-results">
                {filteredPosts.map((post) => {
                  return (
                    <p key={post.id} className="search-results-post">
                      {post.title}
                    </p>
                  );
                })}
                {searchInput.length <= 1 && (
                  <p className="m-0">Search for something...</p>
                )}
                {searchInput.length > 1 && filteredPosts.length === 0
                  ? `No search results found for "${searchInput}"`
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inputs;
