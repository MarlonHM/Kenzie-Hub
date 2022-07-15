import styled from "styled-components";

export const Titulo = styled.h1`
  text-align: center;
  color: #ff577f;
  height: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 25px;
`;

export const ContainerRegister = styled.div`
  background-color: #212529;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 600px;
  border-radius: 4px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #f8f9fa;
    width: 130px;
    height: 28px;
  }

  h3 {
    margin: 10px 0;
  }

  span {
    width: 175px;
    height: 18px;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
  }

  form {
    width: 80%;
  }
  form h3 {
    font-weight: 400;
    font-size: 12px;
    color: #f8f9fa;
    > span {
      color: red;
      margin-left: 10px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.select`
  width: 330px;
  height: 50px;
  border-radius: 4px;
  padding: 0 16px;
  background-color: #343b41;
  color: #f8f9fa;
  border: 1px solid #f8f9fa;
`;
