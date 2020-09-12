const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

const addPosts = (posts) => {
  return {
    type: "ADD_POSTS",
    payload: posts,
  };
};

const removePost = (id) => {
  return {
    type: "REMOVE_POST",
    payload: id,
  };
};

export default {
  addPost,
  addPosts,
  removePost,
};
