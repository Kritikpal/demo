import multer from "multer";
import path from "path";
import fs from "fs";
import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
  MULTER_PUBLIC_DIR,
} from "../config/multer.config.js";
import { AppError } from "../utills/AppError.js";

// Set up storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, MULTER_PUBLIC_DIR);
  },
  filename: (req, file, cb) => {
    if (!fs.existsSync(MULTER_PUBLIC_DIR)) {
      fs.mkdirSync(MULTER_PUBLIC_DIR, { recursive: true });
    }
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Set up file filter to validate file types
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ALLOWED_FILE_TYPES;
  const mimetype = allowedFileTypes.test(file.mimetype);
  const extname = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(
    new AppError(
      "Error: File upload only supports the following filetypes - " +
        allowedFileTypes,
      400
    )
  );
};

// Set up limits for file uploads
const limits = {
  fileSize: MAX_FILE_SIZE,
};

// Create the multer instance with the configuration
const uploadConfig = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
});

export default uploadConfig;
