import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const overlaySlice = createSlice({
  name: "overlay",
  initialState:  { value: false, },
  reducers: {
    overlay: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const {overlay} = overlaySlice.actions