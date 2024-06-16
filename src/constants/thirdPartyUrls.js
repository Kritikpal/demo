export const TEST_GET_API = "https://jsonplaceholder.typicode.com/todos/1";
export const IDENTITY_VERIFY_API = process.env.IDENTITY_VERIFICATION_API_URL;
export const IDENTITY_VERIFY_API_BASIC_AUTH = `Basic ${btoa(
  `${process.env.IDENTITY_VERIFICATION_API_SECRETID}:${process.env.IDENTITY_VERIFICATION_API_SECRETKEY}`
)}`;

export const EXTRACT_DATA_FROM_ID_API_URL = process.env.EXTRACT_DATA_FROM_ID_API_URL;
export const EXTRACT_DATA_FROM_ID_API_ACCOUNT_ID = process.env.EXTRACT_DATA_FROM_ID_API_ACCOUNT_ID;
export const EXTRACT_DATA_FROM_ID_API_API_KEY = process.env.EXTRACT_DATA_FROM_ID_API_API_KEY;