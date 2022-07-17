import styled from "styled-components";

export const Section1Container = styled.div`
  display: flex;
  height: 75vh;
  width: 100%;
  @media (max-width: 1023px) {
    height: 75vh;
  }
`;

export const Section1Image = styled.div`
  justify-content: flex-start;
  background-color: #ec8a57;
  width: 50%;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 10%;
  @media (max-width: 800px) {
    width: 30%;
  }
  @media (max-width: 1023px) {
    width: 50%;
  }
`;

export const Section1Content = styled.div`
  justify-content: flex-end;
  background-color: white;
  padding: 30px 100px 0 0;
  width: 50%;
`;

export const TextContent = styled.p`
  font-size: 38px;
  line-height: 3rem;
  text-align: left;
  padding-left: 20%;
  @media (max-width: 800px) {
    font-size: 26px;
    line-height: 0;
    margin-bottom: -10px;
    padding-left: 40px;
  }
  @media (max-width: 1023px) {
    margin-top: 50px;
    font-size: 35px;
    line-height: 2rem;
  }
`;

export const TextSubContent = styled.p`
  font-size: 20px;
  text-align: left;
  padding-left: 100px;
  padding-top: 20px;
  @media (max-width: 1023px) {
    font-size: 20px;
    line-height: 1.5rem;
    text-align: left;
    padding-left: 70px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
    margin-top: 0;
    line-height: 1.2rem;
    text-align: left;
    padding-left: 40px;
  }
`;

export const ImgSection1 = styled.img`
  height: 480px;
  width: 500px;
  position: relative;
  margin-bottom: 10px;

  @media (max-width: 1023px) {
    margin-top: 50px;
    width: 400px;
    height: 400px;
  }

  @media (max-width: 800px) {
    margin-top: 80px;
    width: 300px;
    height: 300px;
  }
`;
