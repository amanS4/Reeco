import styled from "styled-components";
import {
  BREADCRUMB_DATA,
  EAPPROVAL_STATUS,
  ORDER_ID,
} from "../../constants/common-constants";
import BreadCrumbs from "../common/BreadCrumbs";
import CustomButton from "../common/CustomButton";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../slices/OrderDetails";

const HeroDetailsContainer = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.2);
  .title-actions-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 2.6rem;
  }
  .button-container {
    display: flex;
    gap: 2rem;
  }
`;

export default function HeroDetails() {
  const dispatch = useDispatch();
  const approveOrderHandler = () => {
    dispatch(updateOrderStatus({ status: EAPPROVAL_STATUS.approved }));
  };
  return (
    <HeroDetailsContainer>
      <BreadCrumbs data={BREADCRUMB_DATA} />
      <div className="max-container title-actions-container">
        <h1>{ORDER_ID}</h1>
        <div className="button-container">
          <CustomButton
            type="button"
            textColor="#1E633F"
            backgroundColor="#fff"
          >
            Back
          </CustomButton>
          <CustomButton
            type="button"
            onClick={approveOrderHandler}
            textColor="#fff"
            backgroundColor="#1E633F"
          >
            Approve Order
          </CustomButton>
        </div>
      </div>
    </HeroDetailsContainer>
  );
}
