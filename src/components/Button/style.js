import styled from "styled-components";

export const MyButton = styled.button`
  margin: 20px 0;
  width: ${(prop) => (prop.width ? prop.width : "330px")};
  height: ${(prop) => (prop.height ? prop.height : "50px")};
  border-radius: 4px;
  padding: 0 22px;
  border: 1px solid
    ${(prop) => (prop.borderColor ? prop.borderColor : "#FF577F")};
  cursor: pointer;
  background-color: ${(prop) => (prop.bgcor ? prop.bgcor : "#FF577F")};
  color: ${(prop) => (prop.cor ? prop.cor : "#FFFFFF")};

  &:hover {
    filter: brightness(0.8);
  }
`;
