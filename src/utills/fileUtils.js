import fs from "fs";
/**
 * Convert a file to its Base64 representation.
 * @param {string} filePath - The path to the file to be converted.
 * @returns {Promise<string>} - A promise that resolves to the Base64 encoded string of the file content.
 * @throws {Error} - Throws an error if the file cannot be read.
 */
const fileToBase64 = async (filePath) => {
  try {
    // Read the file content as a buffer
    const fileBuffer = await fs.promises.readFile(filePath);
    // Convert the buffer to a Base64 string
    const base64String = fileBuffer.toString("base64");
    // unlink the file
    fs.unlinkSync(filePath);
    return base64String;
  } catch (error) {
    throw new Error(`Failed to convert file to Base64: ${error.message}`);
  }
};

export default fileToBase64;
