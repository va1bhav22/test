import axios from "axios";
import { toast } from "react-hot-toast";
export const signInRequest = () => ({
  type: "SIGNIN_REQUEST",
});

export const signInSuccess = () => ({
  type: "SIGNIN_SUCCESS",
});

export const signInFailure = (error) => ({
  type: "SIGNIN_FAILURE",
  payload: error,
});

export const authSignIn = (userData) => {
  return async (dispatch) => {
    dispatch(signInRequest());
    try {
      const response = await axios.post(
        "https://kennect-backend-9yvy.onrender.com/api/v1/user/sign-in",
        userData
      );

      dispatch(signInSuccess());
      const accessToken = response.data?.data?.token;
      dispatch(setAccessToken(accessToken));

      toast.success("login Success");
    } catch (error) {
      dispatch(signInFailure(error));
      toast.error("login fail");
      throw error;
    }
  };
};
export const setAccessToken = (accessToken) => {
  return () => {
    localStorage.setItem("accessToken", accessToken);
  };
};
