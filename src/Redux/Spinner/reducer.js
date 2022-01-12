import {
  SHOW_LOADING_ICON,
  SHOW_ERROR_MESSAGE,
  HIDE_LOADING_ICON,
} from "./types";

const initialState = {
  error: "",
  isLoading: false,
};

const spinnerReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SHOW_LOADING_ICON:
      return { isLoading: !initialState.isLoading, error: initialState.error };
    case SHOW_ERROR_MESSAGE:
      return { isLoading: initialState.isLoading, error: payload };
    case HIDE_LOADING_ICON:
      return { isLoading: initialState.isLoading };
    default:
      return { ...state };
  }
};

export default spinnerReducer;
