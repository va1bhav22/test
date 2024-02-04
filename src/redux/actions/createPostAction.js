import axios from "axios";
import { toast } from "react-hot-toast";
export const createPostRequest = () => ({
  type: "CREATE_POST_REQUEST",
});

export const createPostSuccess = () => ({
  type: "CREATE_POST_SUCCESS",
});

export const createPostFailure = (error) => ({
  type: "CREATE_POST_FAILURE",
  payload: error,
});
const accessToken = localStorage.getItem("accessToken");

export const createPost = (postData) => {
  return async (dispatch) => {
    dispatch(createPostRequest());
    try {
      await axios.post(
        "https://kennect-backend-9yvy.onrender.com/api/v1/post/create-post",
        postData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(createPostSuccess());
      toast.success("post create Success");
    } catch (error) {
      dispatch(createPostFailure(error));
      toast.error("post create fail");
    }
  };
};
