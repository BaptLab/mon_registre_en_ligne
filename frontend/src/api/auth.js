// auth.js

import { setAuthToken, setUser } from "./apiUtils";

export const login = async (email, password) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
    console.error("Failed to login:", error);
    throw new Error("Failed to login: " + error.message);
  }
};

export const register = async (email, password) => {
  try {
    const response = await fetch(
      "http://localhost:8080/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to register: " + error.message);
  }
};
