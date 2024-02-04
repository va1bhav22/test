// import { getFromLocalStorage, removeFromLocalStorage } from "localStorageUtils"; // Import functions for interacting with local storage
// import { configs } from "config"; // Import server URL configuration
// import { setUserLoading, setUser, clearUser } from "userActions"; // Import Redux actions for user management

// export const getUser = () => {
//   return async (dispatch) => {
//     const accessToken = getFromLocalStorage("ACCESS_TOKEN");
//     if (!accessToken) {
//       dispatch(clearUser());
//       return;
//     }
//     dispatch(setUserLoading(true));
//     try {
//       const res = await fetch(`${configs.serverUrl}/users/self`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       if (res?.status !== 200) {
//         removeFromLocalStorage("ACCESS_TOKEN");
//         dispatch(clearUser());
//       } else {
//         const data = await res.json();
//         const userData = data?.data;
//         dispatch(setUser(userData));
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       dispatch(clearUser());
//     } finally {
//       dispatch(setUserLoading(false));
//     }
//   };
// };

import axios from "axios";
const accessToken = localStorage.getItem("accessToken");
// console.log("accessToken==>", accessToken);
export const getUserDetailsRequest = () => ({
  type: "GET_USER_DETAILS_REQUEST",
});

export const getUserDetailsSuccess = (userDetails) => ({
  type: "GET_USER_DETAILS_SUCCESS",
  payload: userDetails,
});

export const getUserDetailsFailure = (error) => ({
  type: "GET_USER_DETAILS_FAILURE",
  payload: error,
});

export const getUserDetails = () => {
  return async (dispatch) => {
    dispatch(getUserDetailsRequest());
    try {
      const response = await axios.get(
        "https://kennect-backend-9yvy.onrender.com/api/v1/user/self",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(getUserDetailsSuccess(response.data));
      // return response?.data;
    } catch (error) {
      dispatch(getUserDetailsFailure(error));
    }
  };
};
