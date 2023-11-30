export const APP_IMG_URL = "/reecologo.svg";

export const ORDER_ID = "Order 32457ABC";

export const BREADCRUMB_DATA = [
  {
    link: "",
    label: "Orders",
  },
  {
    link: "/",
    label: ORDER_ID,
  },
];

export const ORDER_DATA = {
  id: ORDER_ID,
  summaryData: [
    { title: "Supplier", content: "East coast fruits & vegetables" },
    { title: "Shipping Date", content: "Thu, Feb 10" },
    { title: "Total", content: "$ 15,028.3" },
    { title: "Category", content: "" },
    { title: "Department", content: "300-444-678" },
    { title: "Status", content: "Awaiting your approval" },
  ],
};

export enum EAPPROVAL_STATUS {
  missing = 0,
  approved = 1,
  error = 2,
  missingUrgent = 3,
  notSet = 4,
}

export const DEFAULT_PRODUCT = {
  id: 1,
  name: "Chicken Breast Fillet, Boneless, 6 ounce raw, Invivid",
  imgUrl: "/avocado-hass.jpg",
  brand: "Homel Black Labelmany",
  price: 20.0,
  quantity: 3,
  total: 60.0,
  status: EAPPROVAL_STATUS.notSet,
  weight: 6,
  weightUnit: "LB",
  oldPrice: 20.0,
  editReason: "",
};

export const EDIT_REASON_OPTIONS = [
  {
    label: "Missing Product",
    value: "missingProduct",
  },
  {
    label: "Quantity is not the same",
    value: "quantityNotSame",
  },
  {
    label: "Price is not the same",
    value: "priceNotSame",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const ALREADY_APPROVED_ERROR =
  "Order can not be modified, once approved. Refresh to begin again";
