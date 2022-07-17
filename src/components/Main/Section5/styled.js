import styled from "styled-components";

export const TitleSection5 = styled.p`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
`;
export const BackgroundContainer = styled.div`
  background-color: #562293;
  height: 75vh;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  color: white;
  flex-direction: column;
`;

export const Testimonials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
`;

export const ContainerDescription = styled.div`
  margin-top: 10px;
  font-size: 20px;
`;

export const ElementTestimonials = styled.div`
  height: 500px;
  margin-top: 30px;
  width: 20%;
  background-color: #fa5f01;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 20px;
  text-align: start;
  @media (max-width: 800px) {
    width: 23%;
    text-align: center;
    padding: 20px 5px;
  }
`;

export const StarRate = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 3px;
`;

export const ButtonSection5 = styled.button`
  margin-bottom: 10px;
  text-decoration: none;
  width: 20%;
  height: 60px;
  border-radius: 10px;
  background-color: #fa5f01;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 14px;
  @media (max-width: 800px) {
    margin-bottom: 90px;
    margin-top: -100px;
  }
`;

export const Garantia = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  height: 200px;
  width: 35%;
  text-align: start;
  padding: 5px 8px;
  border-radius: 5px;
  background-color: black;
  color: #fa5f01;
  justify-content: center;
  @media (max-width: 800px) {
    height: 500px;
    width: 300px;
    text-align: center;
    padding: 20px;
  }
  @media (max-width: 1024px) {
    height: 300px;
    text-align: center;
    padding: 10px;
  }
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Question = styled.div`
  height: 35px;
  width: 40%;
  background-color: #fa5f01;
  border-radius: 5px;
  margin: 10px 0;
  padding-left: 10px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  @media (max-width: 800px) {
    font-size: 14px;
    padding: 30px;
    width: 300px;
    height: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 5px 15px;
  }
`;
