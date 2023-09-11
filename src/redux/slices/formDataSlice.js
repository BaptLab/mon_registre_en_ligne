import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      const inputId = action.payload.id;
      state[inputId] = action.payload.value;
      console.log(inputId, state[inputId]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateValue } = formDataSlice.actions;

export default formDataSlice.reducer;
