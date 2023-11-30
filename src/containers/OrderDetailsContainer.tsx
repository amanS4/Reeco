import { ORDER_DATA } from "../constants/common-constants";
import HeroDetails from "../modules/order-details/HeroDetails";
import OrderDetailsList from "../modules/order-details/OrderDetailsList";
import OrderSummary from "../modules/order-details/OrderSummary";

export default function OrderDetailsContainer() {
  return (
    <div>
      <HeroDetails />
      <section className="max-container">
        <OrderSummary data={ORDER_DATA.summaryData} />
        <OrderDetailsList />
      </section>
    </div>
  );
}
