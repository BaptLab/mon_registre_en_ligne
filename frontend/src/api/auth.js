// auth.js

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

// Function to handle registration
export const register = async (email, password) => {
  try {
    // Make a POST request to your backend API to register the user
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

    // Parse the JSON response
    const data = await response.json();

    // Return the data from the response
    return data;
  } catch (error) {
    // Handle any errors
    throw new Error("Failed to register: " + error.message);
  }
};
