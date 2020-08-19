import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "./constants";
import { loginWithPassword } from "./services";
import { errorParser } from '../../services/apiErrorParser';

/* Login actions */
export function loginSetLoading(loading) {
  return {
    type: LOGIN_LOADING,
    payload: loading,
  };
}

export function loginSetToken(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
}

export function loginSetError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error.message,
  };
}

export const checkLogin = (formData) => (dispatch) => {
	return new Promise((resolve, reject) => {
		dispatch(loginSetLoading(true));
		loginWithPassword(formData).then(async (res) => {
			await dispatch(loginSetToken(res.token));
			resolve(res)
		}).catch((err) => {
			const parsedError = errorParser.parseError(err)
			dispatch(loginSetError(parsedError));
			reject(err)
		}).finally(() => {
			dispatch(loginSetLoading(false));
		})
	})
};
