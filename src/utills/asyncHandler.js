/**
 * Wraps an async function and passes any errors to the next middleware.
 * @param {Function} fn - The async function to wrap.
 * @returns {Function} - The wrapped function.
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
