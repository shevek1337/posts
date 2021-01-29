// React Imports
import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

// Components
import Posts from "./Posts";

const Home = () => {
  const { setPosts, setLoading } = useGlobalContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then(setLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Posts />
    </>
  );
};

export default Home;
