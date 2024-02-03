// commentActions.js
import axios from "axios";

export const getAllCommentsRequest = () => ({
  type: "GET_ALL_COMMENTS_REQUEST",
});

export const getAllCommentsSuccess = (comments) => ({
  type: "GET_ALL_COMMENTS_SUCCESS",
  payload: comments,
});

export const getAllCommentsFailure = (error) => ({
  type: "GET_ALL_COMMENTS_FAILURE",
  payload: error,
});

export const getAllComments = () => {
  return async (dispatch) => {
    dispatch(getAllCommentsRequest());
    try {
      const response = await axios.get(
        "https://kennect-backend-9yvy.onrender.com/api/v1/comment/get-all-comments"
      );
      dispatch(getAllCommentsSuccess(response.data)); // Assuming the comments are under the 'comments' key in the response
    } catch (error) {
      dispatch(getAllCommentsFailure(error));
    }
  };
};

export const searchComments = (searchTerm) => {
  return async (dispatch) => {
    dispatch(getAllCommentsRequest());
    try {
      const response = await axios.get(
        `https://kennect-backend-9yvy.onrender.com/api/v1/comment/get-all-comments?search=${searchTerm}`
      );
      dispatch(getAllCommentsSuccess(response.data)); // Assuming the comments are under the 'comments' key in the response
    } catch (error) {
      dispatch(getAllCommentsFailure(error));
    }
  };
};
