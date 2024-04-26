import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState:  { value: "status" },
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {filter} = filterSlice.actions