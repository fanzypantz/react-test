import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "./actions";

function App() {
  // Get the posts from the state using reducer
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(
      allActions.postActions.addPost([
        {
          text: "FOO BAR",
        },
      ])
    );
  };

  const removePost = (index) => {
    dispatch(allActions.postActions.removePost(index));
  };

  // Instead of using inline JSX, map out the entire post list
  // No need for logic checking if it is empty later
  const listPosts = posts.map((post, index) => (
    <li key={index} onClick={() => removePost(index)}>
      {post.text}
    </li>
  ));

  return (
    <div className="App">
      {listPosts}
      <button onClick={addPost}>Add Post</button>
    </div>
  );
}

export default App;
