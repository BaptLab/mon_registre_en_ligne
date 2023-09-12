import { createSlice } from "@reduxjs/toolkit";

// Helper function to get initial state from localStorage
function getInitialFormData() {
  const storedData = localStorage.getItem("traitementFiche");
  return storedData ? JSON.parse(storedData) : {};
}

const initialState = getInitialFormData();

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      const inputId = action.payload.id;
      state[inputId] = action.payload.value;
      localStorage.setItem("traitementFiche", JSON.stringify(state));
    },
  },
});

export const { updateValue } = formDataSlice.actions;

export default formDataSlice.reducer;
