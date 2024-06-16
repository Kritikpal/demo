import {
  extractPassportInfo,
  verifyIdentityService,
} from "../services/main.services.js";
import ApiResponse from "../utills/ApiResponse.js";
import "../utills/AppError.js";
import { AppError } from "../utills/AppError.js";
import fileToBase64 from "../utills/fileUtils.js";
import { generateKycPdf, generateLastPdf } from "../utills/pdfUtill.js";
const getInformationFromId = async (req, res, next) => {
  const files = [];
  if (!req.files) {
    throw new AppError("Atleast one file should be available", 400);
  }
  for (const file of req.files) {
    const base64File = await fileToBase64(file.path);
    files.push({
      originalname: file.fieldname,
      base64: base64File,
    });
  }
  let data = await extractPassportInfo(files[0].base64);
  res.send(new ApiResponse(200, data, "successful"));
};

const verifyId = async (req, res, next) => {
  const files = [];
  for (const file of req.files) {
    const base64File = await fileToBase64(file.path);
    files.push({
      originalname: file.fieldname,
      base64: "data:image/jpeg;base64," + base64File,
    });
  }
  const requestBody = {
    liveimage1:
      files.find((f) => f.originalname.includes("liveImage1"))?.base64 ||
      "liveImage1",
    liveimage2:
      files.find((f) => f.originalname.includes("liveImage2"))?.base64 ||
      "liveImage2",
    idphoto:
      files.find((f) => f.originalname.includes("idPhoto"))?.base64 ||
      "idPhoto",
  };
  let result = await verifyIdentityService(requestBody);
  res.send(new ApiResponse(200, result, "Identity Matched"));
};
const generatePdf = async (req, res, next) => {
  const files = [];
  if (!req.files.length) {
    throw new AppError("Atleast one file should be available", 400);
  }
  for (const file of req.files) {
    const base64File = await fileToBase64(file.path);
    files.push({
      originalname: file.fieldname,
      base64: "data:image/jpeg;base64," + base64File,
    });
  }
  let data = {};
  data.kyc_title = req.body.title;
  data.kyc_first_name = req.body.firstName;
  data.kyc_middle_name = req.body.middleName;
  data.kyc_last_name = req.body.lastName;
  data.kyc_gender = req.body.gender;
  data.kyc_dob = req.body.dob;
  data.kyc_religion = req.body.religion;
  data.kyc_nationality = req.body.nationality;
  data.kyc_country = req.body.country;
  data.kyc_mobile = req.body.mobile;
  data.kyc_email = req.body.email;
  data.kyc_address = req.body.address;
  data.kyc_passportNo = req.body.passportNo;
  data.kyc_passport_issue_date = req.body.passport_issue_date;
  data.kyc_passport_exp_date = req.body.passport_exp_date;
  data.kyc_country_of_issue = req.body.country_of_issue;
  data.kyc_maretial_status = req.body.maretial_status;
  data.kyc_spouce_name = req.body.spouce_name;
  data.kyc_spouce_nationality = req.body.spouce_nationality;
  data.kyc_spouce_dob = req.body.spouce_dob;
  data.kyc_mother_full_name = req.body.mother_full_name;
  data.kyc_mother_nationality = req.body.mother_nationality;
  data.kyc_father_full_name = req.body.father_full_name;
  data.kyc_father_nationality = req.body.father_nationality;
  data.kyc_father_residence_status = req.body.father_residence_status;
  data.kyc_emirates_number = req.body.emirates_number;
  data.kyc_emirates_issue_date = req.body.emirates_issue_date;
  data.kyc_emirates_exp_date = req.body.kyc_emirates_exp_date;
  data.DO_YOU_CURRENTLY_HOLD_ANY_PUBLIC_POSITION =
    req.body.DO_YOU_CURRENTLY_HOLD_ANY_PUBLIC_POSITION;
  data.DO_YOU_HAVE_OR_HAVE_YOU_EVER_HAD_ANY_DIPLOMATIC_IMMUNITY =
    req.body.DO_YOU_HAVE_OR_HAVE_YOU_EVER_HAD_ANY_DIPLOMATIC_IMMUNITY;
  data.DO_YOU_HAVE_A_CLOSE_ASSOCIATE_WHO_HAS_HELD_PUBLIC_POSITION_IN_THE_LAST_12_MONTHS =
    req.body.DO_YOU_HAVE_A_CLOSE_ASSOCIATE_WHO_HAS_HELD_PUBLIC_POSITION_IN_THE_LAST_12_MONTHS;
  data.DID_YOU_HOLD_ANY_PUBLIC_POSITION_IN_THE_LAST_12_MONTHS =
    req.body.DID_YOU_HOLD_ANY_PUBLIC_POSITION_IN_THE_LAST_12_MONTHS;
  data.HAVE_YOU_EVER_HELD_ANY_PUBLIC_POSITION =
    req.body.HAVE_YOU_EVER_HELD_ANY_PUBLIC_POSITION;
  data.DO_YOU_HAVE_A_RELATIVE_WHO_HAS_HELD_PUBLIC_POSITION_IN_THE_LAST_12_MONTHS =
    req.body.DO_YOU_HAVE_A_RELATIVE_WHO_HAS_HELD_PUBLIC_POSITION_IN_THE_LAST_12_MONTHS;
  data.HAS_THERE_BEEN_A_CONVICTION_AGAINST_YOU_BY_A_COURT_OF_LAW =
    req.body.HAS_THERE_BEEN_A_CONVICTION_AGAINST_YOU_BY_A_COURT_OF_LAW;
  data.IF_YOU_HAVE_ANSWERED_YES_TO_ANY_OF_THE_QUESTIONS_ABOVE_PLEASE_PROVIDE_DETAILS_BELOW =
    req.body.IF_YOU_HAVE_ANSWERED_YES_TO_ANY_OF_THE_QUESTIONS_ABOVE_PLEASE_PROVIDE_DETAILS_BELOW;
  data.kyc_sign_image =
    files.find((f) => f.originalname.includes("sign"))?.base64 || "signImage";
  let result = await generateKycPdf(data);
  // generate file name
  const fileName = `kyc-${Date.now()}.pdf`;
  res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
  res.setHeader("Content-Type", "application/pdf");
  res.send(result);
};
const generateFinalPdf = async (req, res, next) => {
  const files = [];
  if (!req.files.length) {
    throw new AppError("Atleast one file should be available", 400);
  }
  for (const file of req.files) {
    const base64File = await fileToBase64(file.path);
    files.push({
      originalname: file.fieldname,
      base64: "data:image/jpeg;base64," + base64File,
    });
  }
  let data = {};
  data.kyc_company_name_1 = req.body.company_name_1;
  data.kyc_company_name_2 = req.body.company_name_2;
  data.kyc_company_name_3 = req.body.company_name_3;
  data.kyc_agent_name = req.body.agent_name;
  data.kyc_secretary_first_name = req.body.secretary_first_name;
  data.kyc_secretary_middle_name = req.body.secretary_middle_name;
  data.kyc_secretary_last_name = req.body.secretary_last_name;
  data.kyc_secretary_gender = req.body.secretary_gender;
  data.kyc_secretary_salutation = req.body.secretary_salutation;
  data.kyc_secretary_email = req.body.secretary_email;
  data.kyc_secretary_telephone = req.body.secretary_telephone;
  data.kyc_secretary_mobile = req.body.secretary_mobile;
  data.kyc_secretary_passport = req.body.secretary_passport;
  data.kyc_secretary_passport_issue = req.body.secretary_passport_issue;
  data.kyc_secretary_passport_expiry = req.body.secretary_passport_expiry;
  data.kyc_secretary_passport_place = req.body.secretary_passport_place;
  data.kyc_secretary_passport_country = req.body.secretary_passport_country;
  data.kyc_secretary_nationality = req.body.secretary_nationality;
  data.kyc_secretary_dob = req.body.secretary_dob;
  data.kyc_secretary_address_line_1 = req.body.secretary_address_line_1;
  data.kyc_secretary_address_line_2 = req.body.secretary_address_line_2;
  data.kyc_secretary_po_box = req.body.secretary_po_box;
  data.kyc_secretary_postal_code = req.body.secretary_postal_code;
  data.kyc_secretary_city = req.body.secretary_city;
  data.kyc_secretary_state_province = req.body.secretary_state_province;
  data.kyc_secretary_country = req.body.secretary_country;
  data.kyc_general_manager_name = req.body.general_manager_name;
  data.kyc_visa_package = req.body.visa_package;
  data.kyc_need_establishment_card = req.body.need_establishment_card;
  data.kyc_activity_number = req.body.activity_number;
  data.kyc_activity_name = req.body.activity_name;
  data.kyc_proposed_share_capital = req.body.proposed_share_capital;
  data.kyc_share_value = req.body.share_value;
  data.kyc_total_number_of_shares = req.body.total_number_of_shares;
  data.kyc_number_of_shares = req.body.number_of_shares;
  data.kyc_secretary_is_residence_of_uae =
    req.body.secretary_is_residence_of_uae;
  data.kyc_secretary_emirates_id = req.body.secretary_emirates_id;
  data.kyc_manager_signature =
    files.find((f) => f.originalname.includes("sign"))?.base64 || "signImage";
  let result = await generateLastPdf(data);
  // generate file name
  const fileName = `kyc-${Date.now()}.pdf`;
  res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
  res.setHeader("Content-Type", "application/pdf");
  res.send(result);
};

export { getInformationFromId, verifyId, generatePdf, generateFinalPdf };
