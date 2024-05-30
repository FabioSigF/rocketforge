import { combineReducers } from "redux";
import { MenuMobileSlice } from "./menuMobile/slice";


const rootReducer = combineReducers({
  menuMobile: MenuMobileSlice.reducer,
})

export default rootReducer;
