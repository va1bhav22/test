import axios from "axios";
import { toast } from "react-hot-toast";
export const signUpRequest = () => ({
  type: "SIGNUP_REQUEST",
});

export const signUpSuccess = () => ({
  type: "SIGNUP_SUCCESS",
});

export const signUpFailure = (error) => ({
  type: "SIGNUP_FAILURE",
  payload: error,
});

// https://kennect-backend-9yvy.onrender.com/api/v1/user/sign-up

export const signUpAuth = (userData) => {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      await axios.post(
        "https://kennect-backend-9yvy.onrender.com/api/v1/user/sign-up",
        userData
      );
      dispatch(signUpSuccess());
      toast.success("signup Success");
    } catch (error) {
      dispatch(signUpFailure(error));
      toast.error("signup fail");
      throw error;
    }
  };
};
