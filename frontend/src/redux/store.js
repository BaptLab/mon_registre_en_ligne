import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./slices/checkboxSlice";
import formDataReducer from "./slices/formDataSlice";
import optionalFieldsReducer from "./slices/optionalFieldSlice";
import userReducer from "./slices/userSlice"; // Import user slice

export const store = configureStore({
  reducer: {
    dataCheckbox: checkboxReducer,
    formData: formDataReducer,
    optionalFields: optionalFieldsReducer,
    user: userReducer, // Include user slice in the reducer
  },
});
