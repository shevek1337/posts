// React Imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Inputs from "./components/Inputs";
import Post from "./components/Post";

const App = () => {
  return (
    <>
      <Router>
        <Inputs />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id" children={<Post />}></Route>
        </Switch>
        <Edit />
        <Add />
      </Router>
    </>
  );
};

export default App;
