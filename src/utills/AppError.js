// AppError.js
export class AppError extends Error {
  /**
   * Constructor for creating an instance of AppError.
   *
   * @param {string} message - The error message.
   * @param {number} status - The error status code.
   */
  constructor(message, status=500) {
    super(message);
    this.status = status;
  }
}
