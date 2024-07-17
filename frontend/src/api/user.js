const apiUrl = "http://localhost:8080/api";
const apiEndpoint = "user";

export const getUserInfos = async (userId) => {
  try {
    const response = await fetch(
      `${apiUrl}/${apiEndpoint}/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
    console.error("Failed to fetch user info:", error);
    throw new Error(
      "Failed to fetch user info: " + error.message
    );
  }
};

export const getUserNameById = async (userId) => {
  try {
    const response = await fetch(
      `${apiUrl}/${apiEndpoint}/${userId}/name`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}`
      );
    }

    const data = await response.text(); // Since the response is plain text (email as string)
    return data;
  } catch (error) {
    console.error("Failed to fetch user name:", error);
    throw new Error(
      "Failed to fetch user name: " + error.message
    );
  }
};
