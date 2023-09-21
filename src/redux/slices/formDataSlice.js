import { createSlice } from "@reduxjs/toolkit";

// Define pageData with meaningful names and initial data
const pageData = {
  introductionPageData: {
    name: "Introduction",
    data: {},
  },
  destinatairePageData: {
    name: "Destinataire des données",
    data: {},
  },
  dataPageData: {
    name: "Catégories de données traitées",
    data: {},
  },
  finalityPageData: {
    name: "Finalités des données traitées",
    data: {},
  },
  partiePrenantesPageData: {
    name: "Parties prenantes",
    data: {},
  },
  personnesConcernéesPageData: {
    name: "Personnes concernées par le traitement",
    data: {},
  },
  baseLégalePageData: {
    name: "Base Légale",
    data: {},
  },
  securityPageData: {
    name: "Sécurité des données",
    data: {},
  },
};

// Helper function to get initial state from localStorage
function getInitialFormData() {
  const storedData = localStorage.getItem("traitementFiche");
  return storedData
    ? JSON.parse(storedData)
    : Object.keys(pageData).reduce((acc, page) => {
        acc[page] = pageData[page].data;
        return acc;
      }, {});
}

const initialState = getInitialFormData();

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      const { page, id, value, label } = action.payload;

      // Ensure that the page object exists, create it if it doesn't
      if (!state[page]) {
        state[page] = {};
      }

      // Update the data for the current page
      state[page][id] = { value, label };

      // Also update the local storage
      localStorage.setItem("traitementFiche", JSON.stringify(state));
    },
  },
});

export const { updateValue } = formDataSlice.actions;

export default formDataSlice.reducer;
