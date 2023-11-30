// Popup.tsx
import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 2rem;
  min-width: 25rem;
  border-radius: 8px;
  animation: ${slideIn} 0.3s ease-in-out;
  font-size: 1.4rem;
  .close-btn {
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 1rem;
    top: 1rem;
    i {
      color: #000;
      font-size: 2.2rem;
    }
  }
  .title {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-right: 3rem;
  }
`;

interface PopupProps {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

const CustomPopup: React.FC<PopupProps> = ({ title, onClose, children }) => {
  return (
    <Overlay>
      <PopupContainer>
        <div className="title">{title}</div>
        {children}
        <button className="close-btn" onClick={onClose}>
          <i className="uil uil-times"></i>
        </button>
      </PopupContainer>
    </Overlay>
  );
};

export default CustomPopup;
