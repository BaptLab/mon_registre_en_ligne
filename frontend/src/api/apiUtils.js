export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearUser = () => {
  localStorage.clear();
};

export const getAuthToken = () => {
  const userInfos = localStorage.getItem("user");
  const userToken = JSON.parse(userInfos).token;
  console.log("getting token : ", userToken);
  return userToken;
};

const fetchWithAuth = async (url, options = {}) => {
  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
  };

  if (getAuthToken()) {
    headers.Authorization = `Bearer ${getAuthToken()}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response.status}`
    );
  }

  return response.json();
};

export const mapFormDataToFiche = (formData) => {
  // Initialize an empty object to hold the fiche data
  const fiche = {};

  // Loop through each page and map the data accordingly
  formData.forEach((page) => {
    switch (page.page) {
      case "introductionPageData":
        fiche.traitmentName = page.data.name?.value || "";
        fiche.traitmentCreationDate = page.data.creationDate
          ?.value
          ? new Date(page.data.creationDate.value)
          : null;
        fiche.traitmentCreationDatePrecision =
          page.data.creationDatePrecision?.value || "";
        break;
      case "destinatairePageData":
        fiche.destinataireType = Object.values(
          page.data
        ).map((item) => item.value || "");
        fiche.destinatairesPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      case "securityPageData":
        fiche.security = Object.values(page.data).map(
          (item) => item.value || ""
        );
        fiche.securityPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      // Add cases for other pages
      case "dataPageData":
        fiche.dataCategories = Object.values(page.data).map(
          (item) => item.value || ""
        );
        fiche.dataCategoriesPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      case "finalityPageData":
        fiche.finalities = Object.values(page.data).map(
          (item) => item.value || ""
        );
        fiche.finalitiesPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      case "partiePrenantesPageData":
        fiche.stakeholders = Object.values(page.data).map(
          (item) => item.value || ""
        );
        fiche.stakeholdersPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      case "personnesConcernéesPageData":
        fiche.concernedPersons = Object.values(
          page.data
        ).map((item) => item.value || "");
        fiche.concernedPersonsPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      case "baseLégalePageData":
        fiche.legalBasis = Object.values(page.data).map(
          (item) => item.value || ""
        );
        fiche.legalBasisPrecisions = Object.values(
          page.data
        ).map((item) => item.label || "");
        break;
      default:
        break;
    }
  });

  // Return the mapped fiche object
  return fiche;
};

export default fetchWithAuth;
