import {
  AXIOS_METHOD_GET,
  AXIOS_METHOD_POST,
} from "../constants/axios.constant.js";
import {
  EXTRACT_DATA_FROM_ID_API_ACCOUNT_ID,
  EXTRACT_DATA_FROM_ID_API_API_KEY,
  EXTRACT_DATA_FROM_ID_API_URL,
  IDENTITY_VERIFY_API,
  IDENTITY_VERIFY_API_BASIC_AUTH,
  TEST_GET_API,
} from "../constants/thirdPartyUrls.js";
import apiCall from "../utills/apiCall.js";


export const verifyIdentityService = async (data) => {
  let headers = {
    Authorization: IDENTITY_VERIFY_API_BASIC_AUTH,
    "Content-Type": "application/json",
  };
  return await apiCall(IDENTITY_VERIFY_API, AXIOS_METHOD_POST, data, headers);
};

/**
 * Extracts passport information from an image using the provided ID photo.
 *
 * @param {string} idPhoto - The ID photo of the passport.
 * @return {Promise<object>} A Promise that resolves to the extracted passport information.
 */
export const extractPassportInfo = async (idPhoto) => {
  let headers = {
    "Content-Type": "application/json",
    "account-id": EXTRACT_DATA_FROM_ID_API_ACCOUNT_ID,
    "api-key": EXTRACT_DATA_FROM_ID_API_API_KEY,
  };
  const requestBody = {
    task_id: "74f4c926-250c-43ca-9c53-453e87ceacd1",
    group_id: "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
    data: {
      document1: idPhoto,
      doc_type: "international_passport",
    },
  };
  return await apiCall(
    EXTRACT_DATA_FROM_ID_API_URL,
    AXIOS_METHOD_POST,
    requestBody,
    headers
  );
};
