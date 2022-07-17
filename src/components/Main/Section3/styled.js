import styled from "styled-components";

export const ContainerCarrossel = styled.div`
  display: flex;
  justify-content: space-around;
  height: 75vh;
  width: 100%;
  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;

export const ElementCarrosel = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 20px;
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
  font-size: 18px;
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
