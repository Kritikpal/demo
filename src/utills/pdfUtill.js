import path from "path";
import ejs from "ejs";
import fs from "fs";
import html_to_pdf from "html-pdf-node";
import { AppError } from "../utills/AppError.js";


const filePath = path.resolve("private/documents/KycPdf.html");
const lastfilePath = path.resolve(
  "private/documents/pdf.html"
);
export const generateKycPdf = async (data = {}) => {
  try {
    const template = await fs.promises.readFile(filePath, "utf8");
    const htmlContent = ejs.render(template, data);
    let file = { content: htmlContent };
    let options = { format: "A4" };
    const pdfBuffer = await html_to_pdf.generatePdf(file, options);
    return pdfBuffer;
  } catch (err) {
    throw new AppError("Error generating PDF: " + err.message, 500);
  }
};

export const generateLastPdf = async (data = {}) => {
  try {
    const template = await fs.promises.readFile(lastfilePath, "utf8");
    const htmlContent = ejs.render(template, data);
    let file = { content: htmlContent };
    let options = { format: "A4" };
    const pdfBuffer = await html_to_pdf.generatePdf(file, options);
    return pdfBuffer;
  } catch (err) {
    throw new AppError("Error generating PDF: " + err.message, 500);
  }
};
