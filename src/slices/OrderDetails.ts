import { createSlice } from "@reduxjs/toolkit";
import {
  DEFAULT_PRODUCT,
  EAPPROVAL_STATUS,
} from "../constants/common-constants";

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: {
    approvalStatus: EAPPROVAL_STATUS.missing,
    shippingDate: "2023-12-02",
    summaryData: [
      { title: "Supplier", content: "East coast fruits & vegetables" },
      { title: "Shipping Date", content: "Sat, Dec 2" },
      { title: "Total", content: "$ 15,028.3" },
      { title: "Category", content: "" },
      { title: "Department", content: "300-444-678" },
      { title: "Status", content: "Awaiting your approval" },
    ],
    products: [DEFAULT_PRODUCT],
  },
  reducers: {
    updateDetails: (state, action) => {
      const { productId, newData } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.oldPrice = product.price;
        product.price = newData.price;
        product.quantity = newData.quantity;
        product.total = newData.total;
        product.editReason = newData.editReason;
      }
    },
    updateStatus: (state, action) => {
      const { productId, newStatus } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.status = newStatus;
      }
    },
    addProduct: (state, action) => {
      const { newProduct } = action.payload;
      state.products.push(newProduct);
    },
    updateOrderStatus: (state, action) => {
      const { status } = action.payload;
      state.approvalStatus = status;
      const newProducts = state.products.map((product) => {
        return {
          ...product,
          status: status,
        };
      });
      state.products = newProducts;
    },
  },
});

export const { updateDetails, updateStatus, addProduct, updateOrderStatus } =
  orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
