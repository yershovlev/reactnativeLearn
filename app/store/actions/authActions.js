import authApi from "../../api/auth";
import { LOGIN, LOGOUT } from "../actions/actionTypes";

export const loginAction = (email, password) => {
  try {
    console.log("Before login");
    return async (dispatch) => {
      const result = await authApi.login(email, password);

      dispatch({
        type: LOGIN,
        payload: result.ok,
      });
    };
  } catch (error) {}
};

export const logout = () => {
  try {
    return async (dispatch) => {
      dispatch({
        type: LOGOUT,
        payload: "false",
      });
    };
  } catch (error) {}
};
