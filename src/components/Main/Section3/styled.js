import styled from "styled-components";

export const ContainerCarrossel = styled.div`
  display: flex;
  justify-content: space-around;
  height: 75vh;
  width: 100%;
`;

export const ElementCarrosel = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 30%;
  margin-top: 50px;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 20px;
`;

export const ElementTitle = styled.p`
  font-size: 22px;
  color: black;
`;

export const ElementContent = styled.p`
  font-size: 18px;
  color: black;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0 30px;
`;

export const IconElement = styled.img`
  height: 50px;
  width: 50px;
`;
