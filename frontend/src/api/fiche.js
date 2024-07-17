import { getAuthToken } from "./apiUtils";

const apiUrl = "http://localhost:8080/api";
const apiEndpoint = "fiche";

export const getAllFiches = async (userId) => {
  try {
    const authToken = getAuthToken();
    const response = await fetch(
      `${apiUrl}/${apiEndpoint}/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the authorization header
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch fiches:", error);
    throw new Error(
      "Failed to fetch fiches: " + error.message
    );
  }
};

export const getFicheById = async (userId, ficheId) => {
  try {
    const authToken = getAuthToken();
    const response = await fetch(
      `${apiUrl}/${apiEndpoint}/${userId}/${ficheId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the authorization header
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch fiche:", error);
    throw new Error(
      "Failed to fetch fiche: " + error.message
    );
  }
};

export const createFiche = async (userId, ficheObject) => {
  try {
    const authToken = getAuthToken();
    const response = await fetch(
      `${apiUrl}/user/${userId}/${apiEndpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the authorization header
        },
        body: JSON.stringify(ficheObject),
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to create fiche:", error);
    throw new Error(
      "Failed to create fiche: " + error.message
    );
  }
};

export const deleteFicheById = async (userId, ficheId) => {
  try {
    const authToken = getAuthToken();
    const response = await fetch(
      `${apiUrl}/user/${userId}/${apiEndpoint}/${ficheId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the authorization header
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to delete fiche:", error);
    throw new Error(
      "Failed to delete fiche: " + error.message
    );
  }
};

export const updateFicheById = async (
  userId,
  ficheId,
  ficheObject
) => {
  try {
    const authToken = getAuthToken();
    const response = await fetch(
      `${apiUrl}/user/${userId}/${apiEndpoint}/${ficheId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Include the authorization header
        },
        body: JSON.stringify(ficheObject),
      }
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update fiche:", error);
    throw new Error(
      "Failed to update fiche: " + error.message
    );
  }
};
