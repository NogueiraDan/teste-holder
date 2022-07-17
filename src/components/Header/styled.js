import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 20px;
  width: 100%;
  max-width: 1168px;
  background-color: #562293;
  color: white;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
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

// Responsividade
