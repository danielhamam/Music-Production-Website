import {
  MEDIA_LOADING,
  MEDIA_SET_DATA,
  MEDIA_ERROR,
  MEDIA_REMOVE_DATA
} from "./constants";
import { _fetchMedia, _saveMedia, _deleteMedia } from "./services";
import { errorParser } from '../../services/apiErrorParser';

/* Login actions */
export function mediaSetLoading(loading) {
  return {
    type: MEDIA_LOADING,
    payload: loading,
  };
}

export function mediaSetData(data) {
  return {
    type: MEDIA_SET_DATA,
    payload: data,
  };
}

export function mediaRemoveData(id) {
	return {
	  type: MEDIA_REMOVE_DATA,
	  payload: id,
	};
  }

export function mediaSetError(error) {
  return {
    type: MEDIA_ERROR,
    payload: error.message,
  };
}

export const fetchMedia = () => (dispatch) => {
	return new Promise((resolve, reject) => {
		dispatch(mediaSetLoading(true));
		_fetchMedia().then(async (res) => {
			await dispatch(mediaSetData(res));
			resolve(res)
		}).catch((err) => {
			const parsedError = errorParser.parseError(err)
			dispatch(mediaSetError(parsedError));
			reject(err)
		}).finally(() => {
			dispatch(mediaSetLoading(false));
		})
	})
};
export const saveMedia = (formData) => (dispatch) => {
	return new Promise((resolve, reject) => {
		dispatch(mediaSetLoading(true));
		_saveMedia(formData).then(async (res) => {
			await dispatch(fetchMedia());
			resolve(res)
		}).catch((err) => {
			const parsedError = errorParser.parseError(err)
			dispatch(mediaSetError(parsedError));
			reject(err)
		}).finally(() => {
			dispatch(mediaSetLoading(false));
		})
	})
};
export const deleteMedia = (formData) => (dispatch) => {
	return new Promise((resolve, reject) => {
		dispatch(mediaSetLoading(true));
		_deleteMedia(formData).then(async (res) => {
			await dispatch(mediaRemoveData(formData.id));
			resolve(res)
		}).catch((err) => {
			const parsedError = errorParser.parseError(err)
			dispatch(mediaSetError(parsedError));
			reject(err)
		}).finally(() => {
			dispatch(mediaSetLoading(false));
		})
	})
};
