import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./slices/checkboxSlice";
import formDataReducer from "./slices/formDataSlice";

export const store = configureStore({
  reducer: {
    dataCheckbox: checkboxReducer,
    formData: formDataReducer,
  },
});
