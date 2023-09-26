import { createSlice } from "@reduxjs/toolkit";

// Define pageData with meaningful names and initial data
const formData = [
  {
    name: "Introduction",
    page: "introductionPageData",
    data: {},
  },
  {
    name: "Destinataire des données",
    page: "destinatairePageData",
    data: {},
  },
  {
    name: "Catégories de données traitées",
    page: "dataPageData",
    data: {},
  },
  {
    name: "Finalités des données traitées",
    page: "finalityPageData",
    data: {},
  },
  {
    name: "Parties prenantes au traitement",
    page: "partiePrenantesPageData",
    data: {},
  },
  {
    name: "Personnes concernées par le traitement",
    page: "personnesConcernéesPageData",
    data: {},
  },
  {
    name: "Base Légale",
    page: "baseLégalePageData",
    data: {},
  },
  {
    name: "Sécurité des données",
    page: "securityPageData",
    data: {},
  },
];

function getInitialFormData() {
  let storedData = localStorage.getItem("traitementFiche");
  console.log(storedData);
  if (!storedData) {
    // Create the Local Storage entry if it doesn't exist
    localStorage.setItem("traitementFiche", JSON.stringify([]));
    return formData;
  }

  try {
    const parsedData = JSON.parse(storedData);

    if (!Array.isArray(parsedData)) {
      console.error("Invalid data format in Local Storage.");
      localStorage.setItem("traitementFiche", JSON.stringify([]));
      return formData;
    }

    const result = [];

    for (const pageData of formData) {
      const pageKey = pageData.page;
      const existingData = parsedData.find((data) => data.page === pageKey) || {};

      result.push({
        name: pageData.name,
        page: pageKey,
        data: existingData.data || {},
      });
    }

    return result;
  } catch (error) {
    console.error("Error parsing Local Storage data:", error);
    return formData;
  }
}

const initialState = getInitialFormData();

const formDataSlice = createSlice({
  name: "formData",
  initialState, // Use the newly created initialState
  reducers: {
    updateValue: (state, action) => {
      const { page, id, value, label } = action.payload;

      // Find the index of the page data in state array
      const pageIndex = state.findIndex((pageData) => pageData.page === page);

      if (pageIndex !== -1) {
        // If the page exists in the array, update its data
        const data = state[pageIndex].data || {};
        data[id] = { value, label };
        state[pageIndex].data = data;

        // Save updated formData to Local Storage
        localStorage.setItem("traitementFiche", JSON.stringify(state));
      } else {
      }
    },
  },
});

export const { updateValue } = formDataSlice.actions;

export default formDataSlice.reducer;
