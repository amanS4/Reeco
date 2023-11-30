import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  border?: string;
  background?: string;
  margin?: string;
  children: ReactNode;
}

const StyledCard = styled.div<CardProps>`
  padding: 2rem;
  border-radius: 10px;
  border: ${(props) => props.border || "1px solid #ddd"};
  background-color: ${(props) => props.background || "#ffffff"};
  margin: ${(props) => props.margin || "0"};
`;

const CustomCard: React.FC<CardProps> = ({
  margin,
  border,
  background,
  children,
}) => {
  return (
    <StyledCard border={border} background={background} margin={margin}>
      {children}
    </StyledCard>
  );
};

export default CustomCard;
