// Default state
const initialState = [];

// Reducer for the posts
const posts = (state = initialState, action) => {
  // Based on the action type return a new array based on the old state
  // Dont want to mutate the original state, you create a new array
  switch (action.type) {
    case "ADD_POST":
      // Adds a single item to the array
      return [...state, action.payload];
    case "ADD_POSTS":
      // Adds an array to the end
      return [...state, ...action.payload];
    case "REMOVE_POST":
      // Removes a single item at specified index
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    default:
      return state;
  }
};

export default posts;
