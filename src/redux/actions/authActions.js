import axios from "axios";

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
        "http://192.168.36.238:3000/api/v1/user/sign-up",
        userData
      );
      dispatch(signUpSuccess());
    } catch (error) {
      dispatch(signUpFailure(error));
      throw error;
    }
  };
};
