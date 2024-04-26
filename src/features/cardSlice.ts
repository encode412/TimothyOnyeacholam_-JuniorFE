import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "details",
  initialState:  { id: 1, },
  reducers: {
    details: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const {details} = cardSlice.actions