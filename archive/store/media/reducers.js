import { MEDIA_LOADING, MEDIA_SET_DATA, MEDIA_ERROR, MEDIA_REMOVE_DATA } from "./constants";
const initialState = {
  loading: false,
  errorMessage: {},
  media: [],
};

export function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case MEDIA_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case MEDIA_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case MEDIA_SET_DATA:
      return {
        ...state,
        media: action.payload,
      };
    case MEDIA_REMOVE_DATA:
      console.log(state.media.filter(m => m._id != action.payload))
      return {
        ...state,
        media: state.media.filter(m => m._id != action.payload)
      }
    default:
      return state;
  }
}
