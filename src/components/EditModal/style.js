import styled from "styled-components";

export const ContainerModal = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 350px;
  position: absolute;
  z-index: 1;
  bottom: 250px;

  div {
    width: 370px;
  }
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    width: 370px;
  }
`;

export const Cabecalho = styled.section`
  background-color: #343b41;
  height: 50px;
  width: 370px;
  position: relative;

  button {
    position: absolute;
    top: 10;
    right: 0;
    margin-right: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #fff;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;

export const Cadastrar = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  width: 370px;
`;

export const DivForm = styled.section`
  width: 370px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: #212529;

  form {
    width: 330px;
    display: flex;
    flex-direction: column;

    section {
      flex-direction: row;
      justify-content: space-between;
      padding-right: 40px;
    }
  }
  form h3 {
    font-weight: 400;
    font-size: 12px;
    color: #f8f9fa;
    margin: 15px 0;

    > span {
      color: red;
      margin-left: 10px;
    }
  }
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
