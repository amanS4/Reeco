import { EAPPROVAL_STATUS } from "../constants/common-constants";

export const getStatusLabel = (statusCode: EAPPROVAL_STATUS) => {
  switch (statusCode) {
    case EAPPROVAL_STATUS.approved:
      return "Approved";
    case EAPPROVAL_STATUS.error:
      return "Error";
    case EAPPROVAL_STATUS.missing:
      return "Missing";
    case EAPPROVAL_STATUS.missingUrgent:
      return "Missing-Urgent";
    case EAPPROVAL_STATUS.priceQuantUpdated:
      return "Price & Quanity Updated";
    case EAPPROVAL_STATUS.priceUpdated:
      return "Price Updated";
    case EAPPROVAL_STATUS.quanityUpdated:
      return "Quanity Updated";
    default:
      return "";
  }
};
