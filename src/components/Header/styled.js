import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  background-color: #562293;
  color: white;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const ButtonHeader = styled.button`
  text-decoration: none;
  width: 10%;
  border-radius: 10px;
  background-color: #fa5f01;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 14px;
  @media (max-width: 800px) {
    width: 20%;
    justify-content: space-between;
  }
  @media (max-width: 1023px) {
    width: 20%;
    justify-content: space-between;
  }
`;

export const Timer = styled.p`
  font-weight: 800;
  font-size: 20px;
  margin-top: 10px;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;
