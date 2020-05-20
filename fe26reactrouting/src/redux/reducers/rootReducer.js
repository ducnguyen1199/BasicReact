import { combineReducers } from "redux";
import khoaHocReducer from "./khoahocReducer";
import nguoiDungReducer from "./nguoidungReducer";

const rootReducer = combineReducers({
  khoaHocReducer,
  nguoiDungReducer
});

export default rootReducer;
