import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "./actions";

import Form from "./components/Form";

function App() {
  // Get the posts from the state using reducer
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        // Just limiting the amount of posts for the test, pagination needed
        const posts = res.slice(0, 20);
        dispatch(allActions.postActions.addPosts(posts));
      })
      .catch((err) => {
        console.log("errors: ", err);
      });
  }, [dispatch]);

  const addPost = (data) => {
    createPost(data)
      .then((res) => res.json())
      .then((res) => {
        dispatch(allActions.postActions.addPost(res));
      })
      .catch((err) => {
        console.log("errors: ", err);
      });
  };

  const removePost = (index) => {
    deletePost(index)
      .then(() => {
        dispatch(allActions.postActions.removePost(index));
      })
      .catch((err) => {
        console.log("errors: ", err);
      });
  };

  const createPost = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const deletePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  };

  // Instead of using inline, map out the entire post list
  const listPosts = posts.map((post, index) => (
    <div className="col-sm-3 mb-4" key={index}>
      <div className="card">
        <img className="card-img-top" src={logo} alt="" />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <button className="btn btn-primary" onClick={() => removePost(index)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5">
      <div className="row">{listPosts}</div>
      <h2>Add Post</h2>
      <Form onFormSubmit={addPost} />
    </div>
  );
}

export default App;
