import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  background-color: #121214;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
  }

  div h2 {
    color: #ff577f;
    height: 30px;
    line-height: 24px;
  }

  hr {
    width: 1440px;
    border-color: gray;
  }

  section {
    width: 370px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 900px) {
    width: 800px;

    hr {
      width: 800px;
    }

    ul {
      width: 700px;
    }
  }

  @media (max-width: 780px) {
    width: 400px;

    hr {
      width: 400px;
    }
    div {
      width: 400px;
      padding-left: 5px;
    }

    ul {
      width: 400px;
    }
  }
`;

export const DivUser = styled.div`
  height: 120px;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  span {
    color: #868e96;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
  }
`;

export const DivTech = styled.div`
  height: 120px;

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }
`;

export const MyButton = styled.button`
  background: #212529;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const TechList = styled.div`
  background-color: #212529;
  border-radius: 4px;
  margin-bottom: 20px;

  div {
    padding: 10px;
  }

  div li {
    width: 770px;
    background-color: #121214;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #343b41;
    }

    &:hover span {
      color: #f8f9fa;
    }

    @media (max-width: 900px) {
      width: 780px;
    }

    @media (max-width: 780px) {
      width: 380px;
    }
  }
`;

export const SpanTitle = styled.span`
  color: #f8f9fa;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;

export const SpanStatus = styled.span`
  color: #868e96;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
`;
