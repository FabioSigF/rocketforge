import { createSlice } from "@reduxjs/toolkit";

interface StateProps {
  isOpen: boolean;
}

const initialState: StateProps = {
  isOpen: false,
};

export const MenuMobileSlice = createSlice({
  name: "menuMobile",
  initialState,
  reducers: {
    onToggle: (state) => {
      state.isOpen = !state.isOpen.valueOf();
    }
  }
})

export const { onToggle } = MenuMobileSlice.actions;

export default MenuMobileSlice.reducer;