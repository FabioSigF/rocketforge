import { combineReducers } from "redux";
import { MenuMobileSlice } from "./menuMobile/slice";
import { DeviceSizeSlice } from "./deviceSize/slice";


const rootReducer = combineReducers({
  menuMobile: MenuMobileSlice.reducer,
  deviceSize: DeviceSizeSlice.reducer
})

export default rootReducer;
