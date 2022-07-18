import React from "react";
import * as S from "./styled";
import warning from "../Section4/warning.png";
const Section4 = () => {
  return (
    <section>
      <S.BackgroundContainer>
        <S.TitleSection4 id="assine-2">
          <p>VALOR DE INVESTIMENTO</p>
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

          {/*  Card central*/}
          <S.ElementCenterCarrosel>
            <S.ElementTitle></S.ElementTitle>
            <S.OFFCenter>
              <strong>20%</strong> OFF
            </S.OFFCenter>
            <S.PriceParcel style={{ color: "white", fontSize: "22px" }}>
              De{" "}
              <b>
                <s>R$ 250,80</s>
              </b>{" "}
              por 12x de <br />
            </S.PriceParcel>

            <S.Price style={{ color: "white" }}>
              <p style={{ fontSize: "30px", marginTop: "38px" }}>R$</p>
              <p style={{ fontSize: "5rem" }}>
                <b>16,72</b>
              </p>
            </S.Price>
            <p style={{ fontSize: "20px", color: "white" }}>
              <i>Ou R$200,64 à vista</i>
            </p>
            <S.ButtonElement>QUERO MEU PLANO AGORA</S.ButtonElement>
            <S.FooterElement>
              <S.IconFooter src={warning} />
              <i
                style={{ marginTop: "8px", marginLeft: "5px", color: "white" }}
              >
                Desconto válido até 15/07 às 23:59
              </i>
            </S.FooterElement>
          </S.ElementCenterCarrosel>

          <S.ElementCarrosel>
            <S.ElementTitle></S.ElementTitle>
            <S.OFF>
              <strong>20%</strong> OFF
            </S.OFF>
            <S.PriceParcel>
              De{" "}
              <b>
                <s>R$ 190,80</s>
              </b>{" "}
              por 12x de <br />
            </S.PriceParcel>

            <S.Price>
              <p style={{ fontSize: "30px", marginTop: "38px" }}>R$</p>
              <p>
                <b>12,72</b>
              </p>
            </S.Price>
            <p style={{ fontSize: "20px" }}>
              <i>Ou R$152,64 à vista</i>
            </p>
            <S.ButtonElement>QUERO MEU PLANO AGORA</S.ButtonElement>

            <S.FooterElement>
              <S.IconFooter src={warning} />
              <i style={{ marginTop: "8px", marginLeft: "5px" }}>
                Desconto válido até 15/07 às 23:59
              </i>
            </S.FooterElement>
          </S.ElementCarrosel>
        </S.ContainerCarrossel>
      </S.BackgroundContainer>
    </section>
  );
};

export default Section4;
