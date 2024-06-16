class ApiResponse {
/**
 * Initializes a new instance of the ApiResponse class with the provided status code, data, and message.
 *
 * @param {number} statusCode - The HTTP status code of the response.
 * @param {any} data - The data to be included in the response.
 * @param {string} message - The message to be included in the response.
 */
    constructor(statusCode, data, message) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
    }
}

export default ApiResponse;