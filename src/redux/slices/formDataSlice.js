import { createSlice } from "@reduxjs/toolkit";

// Define pageData with meaningful names and initial data
const formData = {
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

function getInitialFormData() {
  const storedData = localStorage.getItem("traitementFiche");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const result = {};

    // Iterate through the formData object to ensure all pages exist
    for (const pageKey in formData) {
      if (parsedData[pageKey]) {
        result[pageKey] = {
          name: formData[pageKey].name, // Set the 'name' property
          data: parsedData[pageKey].data || {},
        };
      } else {
        result[pageKey] = {
          name: formData[pageKey].name, // Set the 'name' property
          data: {},
        };
      }
    }

    return result;
  } else {
    // If no data is stored in local storage, return the initial formData
    return formData;
  }
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
        state[page] = { name: "", data: {} };
      }

      // Ensure that the data object exists for the page, create it if it doesn't
      if (!state[page].data) {
        state[page].data = {};
      }

      // Update the data for the current page
      state[page].data[id] = { value, label };
      state[page].name = formData[page]?.name || ""; // Set the name property, using the default value if it's undefined

      // Also update the local storage
      localStorage.setItem("traitementFiche", JSON.stringify(state));
    },
  },
});

export const { updateValue } = formDataSlice.actions;

export default formDataSlice.reducer;
