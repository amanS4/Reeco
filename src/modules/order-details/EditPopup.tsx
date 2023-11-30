import styled from "styled-components";
import CustomPopup from "../common/CustomPopup";
import { T_Product } from "../../types/store-types";
import CustomButton from "../common/CustomButton";
import {
  EAPPROVAL_STATUS,
  EDIT_REASON_OPTIONS,
} from "../../constants/common-constants";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { updateDetails } from "../../slices/OrderDetails";

interface IEditPopuo {
  title?: string;
  closePopup: () => void;
  productData: T_Product;
}

const EditPopupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 2rem;
`;

const EditInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-right: 2rem;
  align-items: center;
`;

const SubHeading = styled.div<{ textColor?: string; bold?: boolean }>`
  font-size: 1.4rem;
  color: ${(props) => props.textColor || "#a2a2a2"};
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  margin-bottom: 1.5rem;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 3rem;
`;

const StyledSelectTag = styled.button<{ active: boolean }>`
  border: 1px solid ${(props) => (props.active ? "#3eca72" : "#ddd")};
  background: ${(props) => (props.active ? "#3eca72" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#a2a2a2")};
  margin-right: 1rem;
  border-radius: 20px;
  padding: 6px 10px;
  font-size: 1.4rem;
  cursor: pointer;
`;

const CustomLabel = styled.label`
  font-size: 1.4rem;
  color: #000;
`;

const CustomInputContainer = styled.div<{ readOnly?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #a2a2a2;
  input {
    height: 3rem;
    font-size: 1.4rem;
    min-width: 10rem;
    border-radius: 10px;
    border: ${(props) => (props.readOnly ? "none" : "1px solid #ddd")};
    &:focus-visible {
      outline: ${(props) => (props.readOnly ? "none" : "#1e633f auto 1px")};
    }
  }
`;

export default function EditPopup(props: IEditPopuo) {
  const { closePopup, productData } = props;
  const dispatch = useDispatch();
  const [reasonState, setReasonState] = useState("");
  const [editedData, setEditedData] = useState(productData);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    let status = productData.status;
    if (
      productData.price !== editedData.price &&
      productData.quantity !== editedData.quantity
    ) {
      status = EAPPROVAL_STATUS.priceQuantUpdated;
    } else if (productData.price !== editedData.price) {
      status = EAPPROVAL_STATUS.priceUpdated;
    } else if (productData.quantity !== editedData.quantity) {
      status = EAPPROVAL_STATUS.quanityUpdated;
    }
    dispatch(
      updateDetails({
        productId: editedData.id,
        newData: {
          quantity: editedData.quantity,
          price: editedData.price,
          total: editedData.total,
          editReason: reasonState,
          status: status,
        },
      })
    );
    closePopup();
  };

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedData((data) => {
      return {
        ...data,
        price: Number(e.target.value) || "",
        total: data.quantity * Number(e.target.value),
        status: EAPPROVAL_STATUS.priceUpdated,
      } as T_Product;
    });
  };
  const qunatityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedData((data) => {
      return {
        ...data,
        quantity: Math.round(Number(e.target.value)) || "",
        total: data.price * Math.round(Number(e.target.value)),
        status: EAPPROVAL_STATUS.quanityUpdated,
      } as T_Product;
    });
  };
  return (
    <CustomPopup title={productData.name} onClose={closePopup}>
      <SubHeading>{productData.brand}</SubHeading>
      <form onSubmit={submitHandler}>
        <EditPopupContainer>
          <img height={100} width={100} src={productData.imgUrl} alt="" />
          <EditInputContainer>
            <CustomLabel htmlFor="price">Price ($)</CustomLabel>
            <CustomInputContainer>
              <input
                name="price"
                type="number"
                value={editedData.price}
                onChange={priceChangeHandler}
              />
            </CustomInputContainer>
            <CustomLabel htmlFor="quanity">Quantity</CustomLabel>
            <CustomInputContainer>
              <input
                name="quanity"
                type="number"
                min={1}
                step={1}
                value={editedData.quantity}
                onChange={qunatityChangeHandler}
              />
              &nbsp; x {productData.weight} * 1{productData.weightUnit}
            </CustomInputContainer>
            <CustomLabel htmlFor="total">Total</CustomLabel>
            <CustomInputContainer readOnly>
              <input name="total" readOnly value={`$${editedData.total}`} />
            </CustomInputContainer>
          </EditInputContainer>
        </EditPopupContainer>
        <SubHeading textColor="#000" bold>
          Choose reason <small>(Optional)</small>
        </SubHeading>
        {EDIT_REASON_OPTIONS.map((reason) => (
          <StyledSelectTag
            type="button"
            active={
              reason.value === reasonState ||
              productData.editReason === reason.value
            }
            onClick={() => setReasonState(reason.value)}
          >
            {reason.label}
          </StyledSelectTag>
        ))}
        <ActionsContainer>
          <CustomButton
            onClick={closePopup}
            backgroundColor="#fff"
            textColor="#1E633F"
          >
            Cancel
          </CustomButton>
          <CustomButton type="submit">Send</CustomButton>
        </ActionsContainer>
      </form>
    </CustomPopup>
  );
}
