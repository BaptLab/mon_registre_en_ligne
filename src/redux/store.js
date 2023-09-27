import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./slices/checkboxSlice";
import formDataReducer from "./slices/formDataSlice";
import optionalFieldsReducer from "./slices/optionalFieldSlice";
export const store = configureStore({
  reducer: {
    dataCheckbox: checkboxReducer,
    formData: formDataReducer,
    optionalFields: optionalFieldsReducer,
  },
});
