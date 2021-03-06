import styled from "styled-components";

export const Section2Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  margin-top: 50px;
`;

export const Section2Image = styled.div`
  justify-content: flex-end;
  width: 50%;
  margin-right: 20px;
`;

export const Section2Content = styled.div`
  justify-content: flex-start;
  background-color: white;
  padding: 30px 0 0 0;
  width: 50%;
`;

export const TextContent = styled.p`
  font-size: 50px;
  font-weight: bold;
  line-height: 3rem;
  text-align: left;
  padding-left: 20%;
  padding-top: 50px;
  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 2.3rem;
    margin-top: -20px;
    padding-left: 50px;
  }
`;

export const TextSubContent = styled.p`
  font-size: 26px;
  text-align: left;
  padding-left: 20%;
  padding-top: 20px;
  @media (max-width: 800px) {
    padding-left: 40px;
  }
`;

export const ButtonAction = styled.button`
  text-decoration: none;
  width: 20%;
  height: 60px;
  border-radius: 10px;
  background-color: #fa5f01;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    margin-bottom: -200px;
  }
`;

export const ImgSection2 = styled.img`
  height: 480px;
  width: 500px;
  position: relative;
  margin-bottom: 10px;
  @media (max-width: 800px) {
    height: 400px;
    width: 350px;
    margin-right: 50px;
  }
`;
