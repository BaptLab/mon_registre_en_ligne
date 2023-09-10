import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  civData: false,
  viePersoData: false,
  ecoData: false,
  connexionData: false,
  localisationData: false,
  NIRData: false,
};

export const checkboxSlice = createSlice({
  name: "dataCheckbox",
  initialState,
  reducers: {
    switchValue: (state, action) => {
      const inputId = action.payload.id;
      state[inputId] = !state[inputId];
      console.log(state[inputId]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchValue } = checkboxSlice.actions;

export default checkboxSlice.reducer;
