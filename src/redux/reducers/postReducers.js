// reducers/postReducer.js
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_ALL_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case "GET_ALL_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
