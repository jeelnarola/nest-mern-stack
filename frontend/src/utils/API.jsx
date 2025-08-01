import axiosInstance from "../utils/axios";

export const callApi = async (method, url, data = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (err) {
    console.error('API Error:', err);
    throw err;
  }
};