// actions/commentActions.js
import axios from "axios";

import { toast } from "react-hot-toast";
export const addCommentRequest = () => ({
  type: "ADD_COMMENT_REQUEST",
});

const accessToken = localStorage.getItem("accessToken");

export const addCommentSuccess = () => ({
  type: "ADD_COMMENT_SUCCESS",
});

export const addCommentFailure = (error) => ({
  type: "ADD_COMMENT_FAILURE",
  payload: error,
});

export const addComment = (commentData) => {
  // console.log("post data===>", commentData);
  return async (dispatch) => {
    dispatch(addCommentRequest());
    try {
      await axios.post(
        `https://kennect-backend-9yvy.onrender.com/api/v1/comment/create-comment`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(addCommentSuccess());
      toast.success("Comment add Success");
    } catch (error) {
      dispatch(addCommentFailure(error));
      toast.error("Comment add fail");
    }
  };
};
