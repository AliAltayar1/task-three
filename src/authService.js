import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://abdulrahman-bashir.trainees-mad-s.com/api/v1/auth";

export const register = async (formDataToSend) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formDataToSend, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // console.error("Registration Error:", error.response?.data || error.message);
    return error.response?.data;
  }
};

export const verifyCode = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/verify-code`, formData, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data; // Expecting { success: true, message: "Verification successful" } or appropriate error details
  } catch (error) {
    console.error("Verification Error:", error.response?.data);
    return error.response?.data;
  }
};

export const resendVerifyCode = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/resend-verification-code`,
      formData,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData, {
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const twoFactorAuth = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/confirm-2fa-code`, formData, {
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const resendTwoFactorAuth = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/resend-2fa-code`, formData, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const refreshAuthToken = async (e) => {
  // e.preventDefault();
  try {
    const response = await axios.get(`${API_URL}/refresh-token`, {
      headers: {
        Authorization: `Bearer ${getToken()} `,
      },
    });
    setToken(response.data.access_token);
  } catch (error) {
    console.error("Error:", error.response.data || error.message);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data || error.message);
  }
};

export const setToken = (token) => {
  // Set the token in a cookie with a 10-minute expiration
  Cookies.set("token", token, {
    expires: 1 / 144,
    secure: true,
    sameSite: "Strict",
  }); // 10 minutes = 1/144 of a day
};

export const getToken = () => {
  return Cookies.get("token");
};

export const removeToken = () => {
  return Cookies.remove("token");
};
