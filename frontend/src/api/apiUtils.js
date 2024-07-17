let authToken = "";

export const setAuthToken = (token) => {
  authToken = token;
};

export const clearAuthToken = () => {
  authToken = "";
};

export const getAuthToken = () => {
  return authToken;
};

const fetchWithAuth = async (url, options = {}) => {
  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
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

export default fetchWithAuth;
