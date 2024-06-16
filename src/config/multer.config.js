export const MAX_FILE_SIZE = process.env.MAX_FILE_SIZE || 1024 * 1024 * 8;
export const ALLOWED_FILE_TYPES = /jpeg|jpg|png|gif|mp4|pdf/;
export const MULTER_PUBLIC_DIR = process.env.MULTER_PUBLIC_DIR || "public";