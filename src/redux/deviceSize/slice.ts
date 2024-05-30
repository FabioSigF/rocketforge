import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  isMobile: boolean;
}

const initialState: StateProps = {
  isMobile: false,
};

export const DeviceSizeSlice = createSlice({
  name: "deviceSize",
  initialState,
  reducers: {
    isAMobileDevice: (state) => {
      state.isMobile = true;
    },
    isNotAMobileDevice: (state) => {
      state.isMobile = false;
    },
  }
})

export const { isAMobileDevice, isNotAMobileDevice } = DeviceSizeSlice.actions;

export default DeviceSizeSlice.reducer;