// middlewares/errorHandler.js

// Default exported function for error handling middleware
import ApiResponse from "../utills/ApiResponse.js";
export const errorHandler = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(
      new ApiResponse(
        err.status || 500,
        null,
        err.message || "Internal Server Error"
      )
    );
};
