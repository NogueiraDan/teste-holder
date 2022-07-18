import styled from "styled-components";

export const ElementCarrosel = styled.div`
  height: 300px;
  width: auto;
  margin: 20px 20px 30px 10px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 10px;

  @media (max-width: 800px) {
    margin: 0;
    padding: 0;
    font-size: 10px;
    height: 400px;
    padding-top: 20px;
  }
`;

export const ElementTitle = styled.p`
  font-size: 22px;
  color: black;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const ElementContent = styled.p`
  font-size: 17px;
  color: black;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 30px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const IconElement = styled.img`
  height: 50px;
  width: 50px;
`;
