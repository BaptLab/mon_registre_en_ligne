import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

export const optionalFieldsSlice = createSlice({
  name: "optionalFields",
  initialState,
  reducers: {
    switchOptionalFields: (state) => {
      return !state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchOptionalFields } = optionalFieldsSlice.actions;

export default optionalFieldsSlice.reducer;
