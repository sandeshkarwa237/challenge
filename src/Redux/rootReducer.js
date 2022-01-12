import { combineReducers } from "redux";
import landingReducer from "./Landing/reducer";
import spinnerReducer from "./Spinner/reducer";

// Combining all the reducer using combineReducer
const rootReducer = combineReducers({
  landing: landingReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
