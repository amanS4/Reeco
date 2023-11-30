import { configureStore } from "@reduxjs/toolkit";
import OrderDetails from "./slices/OrderDetails";

const store = configureStore({
  reducer: {
    orderDetails: OrderDetails,
  },
});

export default store;
