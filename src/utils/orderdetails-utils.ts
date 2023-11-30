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
    default:
      return "";
  }
};
