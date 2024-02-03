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

export const signUpAuth = (userData) => {
  return async (dispatch) => {
    dispatch(signUpRequest());
    try {
      await axios.post("/api/signup", userData);
      dispatch(signUpSuccess());
    } catch (error) {
      dispatch(signUpFailure(error));
      throw error;
    }
  };
};
