import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState, T_Product } from "../../types/store-types";
import {
  DEFAULT_PRODUCT,
  EAPPROVAL_STATUS,
} from "../../constants/common-constants";
import { getStatusLabel } from "../../utils/orderdetails-utils";
import { updateStatus } from "../../slices/OrderDetails";
import { useState } from "react";
import ReportMissingPopup from "./ReportMissingPopup";
import EditPopup from "./EditPopup";

const TableContainer = styled.div`
  overflow-x: auto;
  padding: 0 1.5rem;
  margin-top: 2rem;
`;

const StyledTable = styled.table`
  width: 100%;
`;

const TableHeader = styled.th<{ productName?: boolean }>`
  padding: 12px 0;
  text-align: ${(props) => (props.productName ? "center" : "left")};
  font-size: 1.4rem;
  color: #a2a2a2;
`;

const TableData = styled.td<{ actionCol?: boolean }>`
  padding: 1rem 0;
  border-bottom: 1px solid #acacac;
  font-size: 1.4rem;
  background: ${(props) => (props.actionCol ? "#fbfbfb" : "inherit")};
  display: flex;
  justify-content: ${(props) =>
    props.actionCol ? "space-between" : "flex-start"};
  align-items: center;
  &.actionCol {
    i {
      font-size: 2.5rem;
      margin-right: 1rem;
    }
    .green {
      color: #3eca72;
    }
    .red {
      color: #db2114;
    }
    button {
      border: none;
      background: none;
      font-size: 1.4rem;
      color: #a2a2a2;
      cursor: pointer;
    }
  }
  img {
    padding: 0 2rem;
  }
`;

const TableRow = styled.tr`
  font-size: 1em;
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 2fr;
  color: #a2a2a2;
`;

const TableHeaderContainer = styled.thead`
  border: 1px solid #ddd;
  border-radius: 10px;
  tr {
    border: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
  }
`;

const StatusTag = styled.div<{ background: string }>`
  padding: 8px 12px;
  background: ${(props) => (props.background ? props.background : "#3eca72")};
  display: ${(props) => (props.background === "" ? "none" : "block")};
  border-radius: 20px;
  color: #fff;
  font-size: 1.4rem;
`;

const CustomTable = () => {
  const [isPopupOpen, setPopupOpen] = useState({
    show: false,
    productId: 9999,
    name: "",
  });
  const [editPopup, setEditPopup] = useState({
    show: false,
    product: DEFAULT_PRODUCT,
  });
  const dispatch = useDispatch();
  const orderDetailsProducts = useSelector(
    (state: RootState) => state.orderDetails.products
  );

  const approvalHandler = (id: number) =>
    dispatch(
      updateStatus({
        productId: id,
        newStatus: EAPPROVAL_STATUS.approved,
      })
    );

  const closeEditPopup = () => {
    setEditPopup({ show: false, product: DEFAULT_PRODUCT });
  };

  const closePopup = () => {
    setPopupOpen({ show: false, productId: 9999, name: "" });
  };

  const rejectHandler = (id: number, name: string) => {
    setPopupOpen({ show: true, productId: id, name });
  };

  const reportUrgentHandler = (status: EAPPROVAL_STATUS) => {
    dispatch(
      updateStatus({
        productId: isPopupOpen.productId,
        newStatus: status,
      })
    );
    closePopup();
  };

  const showEditPopup = (productData: T_Product) => {
    setEditPopup({ show: true, product: productData });
  };

  return (
    <>
      <TableContainer>
        <StyledTable>
          <TableHeaderContainer>
            <TableRow>
              <TableHeader productName>Product Name</TableHeader>
              <TableHeader>Brand</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHeaderContainer>
          <tbody>
            {orderDetailsProducts?.map((productData) => (
              <TableRow>
                <TableData>
                  <img height={40} width={40} src={productData.imgUrl} alt="" />
                  {productData.name}
                </TableData>
                <TableData>{productData.brand}</TableData>
                <TableData>
                  $ {productData.price} /{" "}
                  {`${productData.weight} * 1${productData.weightUnit}`}
                </TableData>
                <TableData>
                  {productData.quantity} *{" "}
                  {`${productData.weight} * 1${productData.weightUnit}`}
                </TableData>
                <TableData>$ {productData.total}</TableData>
                <TableData className="actionCol" actionCol>
                  <StatusTag
                    background={
                      productData.status === EAPPROVAL_STATUS.approved
                        ? "#3eca72"
                        : productData.status === EAPPROVAL_STATUS.missingUrgent
                        ? "#DB2114"
                        : productData.status === EAPPROVAL_STATUS.missing
                        ? "#F66D44"
                        : "none"
                    }
                  >
                    {getStatusLabel(productData.status)}
                  </StatusTag>
                  <div>
                    <button
                      type="button"
                      onClick={() => approvalHandler(productData.id)}
                    >
                      <i
                        className={`uil uil-check ${
                          productData.status === EAPPROVAL_STATUS.approved
                            ? "green"
                            : ""
                        }`}
                      ></i>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        rejectHandler(productData.id, productData.name)
                      }
                    >
                      <i
                        className={`uil uil-times ${
                          productData.status === EAPPROVAL_STATUS.missing ||
                          productData.status === EAPPROVAL_STATUS.missingUrgent
                            ? "red"
                            : ""
                        }`}
                      ></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => showEditPopup(productData)}
                    >
                      Edit
                    </button>
                  </div>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      {isPopupOpen?.show && (
        <ReportMissingPopup
          name={isPopupOpen.name}
          closePopup={closePopup}
          reportUrgentHandler={reportUrgentHandler}
        />
      )}

      {editPopup.show && (
        <EditPopup
          title="Edit"
          closePopup={closeEditPopup}
          productData={editPopup.product}
        />
      )}
    </>
  );
};

export default CustomTable;
