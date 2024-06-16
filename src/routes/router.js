import { Router } from "express";
import { generateFinalPdf, generatePdf, getInformationFromId, verifyId } from "../controller/main.controller.js";

import {
  GENERATE_FINAL_PDF,
  GENERATE_PDF,
  ROUTE_TEST_GET,
  ROUTE_TEST_POST,
} from "../constants/routes.constant.js";
import asyncHandler from "../utills/asyncHandler.js";

const router = Router();

router.route(ROUTE_TEST_GET).post(asyncHandler(getInformationFromId));
router.route(ROUTE_TEST_POST).post(asyncHandler(verifyId));
router.route(GENERATE_PDF).post(asyncHandler(generatePdf));
router.route(GENERATE_FINAL_PDF).post(asyncHandler(generateFinalPdf));

export default router;
