import { EAPPROVAL_STATUS } from "../constants/common-constants";

// types.ts
export type T_Product = {
  id: number;
  name: string;
  imgUrl: string;
  brand: string;
  price: number;
  quantity: number;
  total: number;
  status: EAPPROVAL_STATUS;
  weight: number;
  weightUnit: string;
  oldPrice: number;
  editReason: string;
};

export type RootState = {
  orderDetails: {
    approvalStatus: EAPPROVAL_STATUS;
    products: T_Product[];
  };
};
