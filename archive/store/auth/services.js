import axios from "axios";
import { API_URL } from "../../config";
import { setToken } from "../../utils/authManager";
export function loginWithPassword(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}auth/login`, formData)
      .then(async (response) => {
        await setToken(response.data.token);
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}