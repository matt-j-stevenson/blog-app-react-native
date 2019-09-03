import createDataContext from './createDataContext';

// Here, we aren't actually using Context to manage our state,
// We are simply using it to move information around... Context can be used
// to communicate information to different (global) nested children to other
// components - and it doesn't necessarily replace a library such as Redux

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.title
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content) => {
    dispatch({
      type: 'add_blogpost',
      payload: { title, content }
    });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({
      type: 'delete_blogpost',
      payload: id
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
