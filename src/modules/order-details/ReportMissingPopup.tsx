import styled from "styled-components";
import CustomPopup from "../common/CustomPopup";
import { EAPPROVAL_STATUS } from "../../constants/common-constants";

const PopupContent = styled.p`
  font-size: 1.4rem;
  color: #a2a2a2;
  margin-bottom: 2rem;
`;

const PopupActions = styled.div`
  color: #a2a2a2;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;

  button {
    background: none;
    color: #a2a2a2;
    border: none;
    font-size: 1.4rem;
  }
`;

interface IReportMissingPopup {
  closePopup: () => void;
  name: string;
  reportUrgentHandler: (status: EAPPROVAL_STATUS) => void;
}

export default function ReportMissingPopup(props: IReportMissingPopup) {
  const { name, closePopup, reportUrgentHandler } = props;
  return (
    <CustomPopup title={"Missing Product"} onClose={closePopup}>
      <PopupContent>Is {name.slice(0, 25)}... urgent?</PopupContent>
      <PopupActions>
        <button
          type="button"
          onClick={() => reportUrgentHandler(EAPPROVAL_STATUS.missingUrgent)}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => reportUrgentHandler(EAPPROVAL_STATUS.missing)}
        >
          No
        </button>
      </PopupActions>
    </CustomPopup>
  );
}
