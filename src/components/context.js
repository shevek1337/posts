import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [postsToShow, setPostsToShow] = useState(4);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // props for edit modal
  const [postId, setPostId] = useState(1);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const openEditModal = () => {
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };
  const openAddModal = () => {
    setShowAddModal(true);
  };
  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        postsToShow,
        setPostsToShow,
        posts,
        setPosts,
        loading,
        setLoading,
        showEditModal,
        openEditModal,
        closeEditModal,
        postId,
        setPostId,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        searchInput,
        setSearchInput,
        showAddModal,
        openAddModal,
        closeAddModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
