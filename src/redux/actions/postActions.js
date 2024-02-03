// actions/postActions.js
import axios from "axios";

export const getAllPostsRequest = () => ({
  type: "GET_ALL_POSTS_REQUEST",
});

export const getAllPostsSuccess = (posts) => ({
  type: "GET_ALL_POSTS_SUCCESS",
  payload: posts,
});

export const getAllPostsFailure = (error) => ({
  type: "GET_ALL_POSTS_FAILURE",
  payload: error,
});

export const getAllPosts = () => {
  return async (dispatch) => {
    dispatch(getAllPostsRequest());
    try {
      const response = await axios.get(
        "https://kennect-backend-9yvy.onrender.com/api/v1/post/get-all-post"
      );
      dispatch(getAllPostsSuccess(response.data));
    } catch (error) {
      dispatch(getAllPostsFailure(error));
    }
  };
};

export const searchPosts = (query) => {
  return async (dispatch) => {
    dispatch(getAllPostsRequest());
    try {
      const response = await axios.get(
        `https://kennect-backend-9yvy.onrender.com/api/v1/post/get-all-post?search=${query}`
      );
      dispatch(getAllPostsSuccess(response.data));
    } catch (error) {
      dispatch(getAllPostsFailure(error));
    }
  };
};
