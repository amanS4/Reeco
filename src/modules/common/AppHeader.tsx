import styled from "styled-components";
import { APP_IMG_URL } from "../../constants/common-constants";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e633f;
  padding-block: 2rem;
  position: sticky;
  top: 0px;
  z-index: 10;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  nav {
    display: inline-block;
    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 1.7rem;
      color: #fff;
    }
  }
`;

const HeaderEndContainer = styled.div`
  gap: 4rem;
  display: flex;
  i {
    font-size: 2.6rem;
    color: #fff;
    cursor: pointer;
  }
  .user-name {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    color: #fff;
    align-items: center;
    span {
      font-size: 1.7rem;
    }
    font-weight: 500;
  }
`;

export default function AppHeader() {
  return (
    <Header className="max-container">
      <HeaderLogoContainer>
        <img height={22} src={APP_IMG_URL} alt="Reeco" />
        <nav>
          <a href="/">Store</a>
        </nav>
        <nav>
          <a href="/">Orders</a>
        </nav>
        <nav>
          <a href="/">Analytics</a>
        </nav>
      </HeaderLogoContainer>
      <HeaderEndContainer>
        <i className="uil uil-shopping-cart"></i>
        <button className="user-name">
          <span>Hello, James</span>
          <i className="uil uil-angle-down"></i>
        </button>
      </HeaderEndContainer>
    </Header>
  );
}
