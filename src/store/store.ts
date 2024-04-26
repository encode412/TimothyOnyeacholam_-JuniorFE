import { configureStore } from "@reduxjs/toolkit";
import { rocketApi } from "../services/rocket"
import { filterSlice } from '../features/filterSlice'
import { overlaySlice } from "../features/overlaySlice";
import { cardSlice } from "../features/cardSlice";
 
export default configureStore({
 reducer: {
   [rocketApi.reducerPath]: rocketApi.reducer,
   filters: filterSlice.reducer,
   overlay: overlaySlice.reducer,
   details: cardSlice.reducer
 },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rocketApi.middleware),
});