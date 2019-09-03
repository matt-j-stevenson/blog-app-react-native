import createDataContext from "./createDataContext";

// Here, we aren't actually using Context to manage our state,
// We are simply using it to move information around... Context can be used
// to communicate information to different (global) nested children to other
// components - and it doesn't necessarily replace a library such as Redux

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
