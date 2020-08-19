import axios from "axios";
import { API_URL } from "../../config";
import {getToken} from "../../utils/authManager"
export function _fetchMedia() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}media`)
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function _saveMedia(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}media/post`, formData, {
        headers:{
          Authorization: getToken()
        }
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function _deleteMedia(formData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}media/delete`, formData, {
        headers:{
          Authorization: getToken()
        }
      })
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}