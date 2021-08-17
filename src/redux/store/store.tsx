import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "../reducer";

const store = configureStore({
  reducer: basketSlice.reducer,
});

export default store;
