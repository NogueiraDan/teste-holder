import React from "react";
import * as S from "./styled";
import warning from "../Section4/warning.png";
const Section3 = () => {
  return (
    <>
      <S.BackgroundContainer>
        <S.TitleSection4>
          <h1>
            <strong>VALOR DE INVESTIMENTO</strong>
          </h1>
        </S.TitleSection4>

        <S.ContainerCarrossel className="investimentos">
          <S.ElementCarrosel>
            <S.ElementTitle></S.ElementTitle>
            <S.OFF>
              <strong>20%</strong> OFF
            </S.OFF>
            <S.PriceParcel>
              De{" "}
              <b>
                <s>R$ 142,80</s>
              </b>{" "}
              por 12x de <br />
            </S.PriceParcel>

            <S.Price>
              <p style={{ fontSize: "30px", marginTop: "38px" }}>R$</p>
              <p>
                <b>9,52</b>
              </p>
            </S.Price>
            <p style={{ fontSize: "20px" }}>
              <i>Ou R$114,24 à vista</i>
            </p>
            <S.ButtonElement>QUERO MEU PLANO AGORA</S.ButtonElement>

            <S.FooterElement>
              <S.IconFooter src={warning} />
              <i style={{ marginTop: "8px", marginLeft: "5px" }}>
                Desconto válido até 15/07 às 23:59
              </i>
            </S.FooterElement>
          </S.ElementCarrosel>

          <S.ElementCarrosel></S.ElementCarrosel>

          <S.ElementCarrosel></S.ElementCarrosel>
        </S.ContainerCarrossel>
      </S.BackgroundContainer>
    </>
  );
};

export default Section3;
