import { forwardRef, Ref, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  textColor?: string;
}

const StyledButton = styled.button<CustomButtonProps>`
  height: 3.2rem;
  padding: 6px 10px;
  border: none;
  border-radius: 20px;
  font-size: 1.4rem;
  cursor: pointer;
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor || "#1E633F"};
  color: ${(props) => props.textColor || "#ffffff"};
  border: 1px solid #1e633f;
`;

const CustomButton = forwardRef(
  (
    { children, backgroundColor, textColor, ...rest }: CustomButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <StyledButton
        ref={ref}
        backgroundColor={backgroundColor}
        textColor={textColor}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
);

export default CustomButton;
