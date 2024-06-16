import axios from "axios";
import { AppError } from "./AppError.js";

const apiCall = async (apiUrl, method, data = null, headers = {}) => {
  try {
    const config = {
      method: method,
      url: apiUrl,
      headers: headers,
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new AppError(
        error.response.data ? error.response.data.Message : error.message,
        error.response.status
      );
    } else if (error.request) {
      throw new AppError("No response received from server", 500);
    } else {
      throw new AppError(error.message, 500);
    }
  }
};

export default apiCall;
