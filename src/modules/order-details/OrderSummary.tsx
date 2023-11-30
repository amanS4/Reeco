import styled from "styled-components";
import CustomCard from "../common/CustomCard";
import { ReactNode } from "react";

interface IOrderSummary {
  data: {
    title: string;
    content: string | ReactNode;
  }[];
}
const OrderSummaryContainer = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

const OrderSummaryCard = styled.div`
  position: relative;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px; /* Adjust the width of the separator as needed */
    background-color: #ddd; /* Adjust the color of the separator as needed */
  }
  .title {
    font-size: 1.4rem;
    color: #a2a2a2;
    margin-bottom: 0.5rem;
  }
  .content {
    font-size: 1.4rem;
    color: #000;
  }
`;

export default function OrderSummary(props: IOrderSummary) {
  const { data } = props;
  return (
    <CustomCard margin="4rem 0 3rem">
      <OrderSummaryContainer>
        {data?.map((summaryData) => (
          <OrderSummaryCard key={summaryData.title}>
            <div className="title">{summaryData.title}</div>
            <div className="content">{summaryData.content}</div>
          </OrderSummaryCard>
        ))}
      </OrderSummaryContainer>
    </CustomCard>
  );
}
