import {
  SHOW_ERROR_MESSAGE,
  SHOW_LOADING_ICON,
  HIDE_LOADING_ICON,
} from "./types";

export const showErrorMessage = (payload) => ({
  type: SHOW_ERROR_MESSAGE,
  payload,
});

export const hideLoadingIcon = () => ({
  type: HIDE_LOADING_ICON,
});

export const showLoadingIcon = () => ({
  type: SHOW_LOADING_ICON,
});
