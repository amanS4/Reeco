import styled from "styled-components";
import CustomCard from "../common/CustomCard";
import CustomButton from "../common/CustomButton";
import SearchBox from "../common/SearchBox";
import CustomTable from "./CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../slices/OrderDetails";
import { DEFAULT_PRODUCT } from "../../constants/common-constants";
import { useCallback } from "react";
import { RootState } from "../../types/store-types";

const OrderDetailsActionsContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .print-icon {
    font-size: 2.5rem;
    color: #1e633f;
    cursor: pointer;
  }
  .right-end {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

export default function OrderDetailsList() {
  const dispatch = useDispatch();
  const orderDetailsProducts = useSelector(
    (state: RootState) => state.orderDetails.products
  );
  const addItemHandler = useCallback(() => {
    const newProduct = { ...DEFAULT_PRODUCT };
    newProduct.id = orderDetailsProducts.length + 1;
    dispatch(addProduct({ newProduct }));
  }, [dispatch, orderDetailsProducts]);

  const printHandler = () => {
    const css = "@page { size: landscape; }";
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.media = "print";
    // @ts-expect-error   redundant
    if (style.styleSheet) {
      // @ts-expect-error redundant
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    window.print();
    head.removeChild(style);
  };

  return (
    <CustomCard>
      <OrderDetailsActionsContainer>
        <SearchBox />
        <div className="right-end">
          <CustomButton
            onClick={addItemHandler}
            backgroundColor="#fff"
            textColor="#1E633F"
          >
            Add Item
          </CustomButton>
          <i onClick={printHandler} className="uil uil-print print-icon"></i>
        </div>
      </OrderDetailsActionsContainer>
      <CustomTable />
    </CustomCard>
  );
}
