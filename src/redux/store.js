import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./slices/checkboxSlice";

export const store = configureStore({
  reducer: {
    dataCheckbox: checkboxReducer,
  },
});
