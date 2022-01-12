import { UPDATE_LANDING_PRODUCTS, UPDATE_FILTER_VALUE } from "./types";

const INITIAL_STATE = {
  productLists: [],
  selectedFilterValue: "",
  filteredProductLists: [],
};

const filterProducts = (filterValue, productLists) => {
  return productLists.filter((productList) => productList[filterValue]);
};

const landingReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // Update product data in the state
    case UPDATE_LANDING_PRODUCTS:
      return {
        ...state,
        productLists: payload,
      };
    case UPDATE_FILTER_VALUE:
      return {
        ...state,
        selectedFilterValue: payload,
        filteredProductLists: filterProducts(payload, state.productLists),
      };
    default:
      return state;
  }
};

export default landingReducer;
