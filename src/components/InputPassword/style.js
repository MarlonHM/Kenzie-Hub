import styled from "styled-components";

export const MyInputPassword = styled.input`
  width: 330px;
  height: 50px;
  border-radius: 4px;
  padding: 0 16px;
  background-color: #343b41;
  color: #f8f9fa;
  border: 1px solid #f8f9fa;
`;

export const Container = styled.div`
  position: relative;

  svg {
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 0;
  }
`;
