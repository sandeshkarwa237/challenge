import axios from "axios";
import { endpoints } from "../../static-content/endpoints";
import { UPDATE_LANDING_PRODUCTS, UPDATE_FILTER_VALUE } from "./types";
import {
  showLoadingIcon,
  showErrorMessage,
  hideLoadingIcon,
} from "../Spinner/action";

// Action used for updating landing page products in redux state
export const updateLandingProducts = (payload) => {
  return {
    type: UPDATE_LANDING_PRODUCTS,
    payload,
  };
};

// Action used for filtering product list in redux state
export const updateFilter = (dispatch, payload) => {
  dispatch({ type: UPDATE_FILTER_VALUE, payload });
};

// Action used for fetching landing page products
export const fetchLandingProducts = async (dispatch) => {
  try {
    dispatch(showLoadingIcon());
    const response = await axios.get(endpoints.GET_PRODUCT_LIST);
    if (response.status === 200) {
      dispatch(hideLoadingIcon());
      dispatch(updateLandingProducts(response.data));
    } else {
      dispatch(
        showErrorMessage("Something went wrong. Try again after some time")
      );
    }
  } catch (error) {
    dispatch(
      showErrorMessage("Something went wrong. Try again after some time")
    );
  }
};
