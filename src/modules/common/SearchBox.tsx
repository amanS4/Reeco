import styled from "styled-components";

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 40rem;
  i {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #ababab;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  flex: 1;
  border-radius: 20px;
  font-size: 1.4rem;
  &:focus-visible {
    outline: #1e633f auto 1px;
  }
`;

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <Input type="text" placeholder="Search..." />
      <i className="uil uil-search"></i>
    </SearchBoxContainer>
  );
};

export default SearchBox;
