import React from "react";
import * as S from "./styled";
import img from "../Section1/telas.png";
const Section2 = () => {
  return (
    <>
      <S.Section2Container id="assine">
        <S.Section2Content>
          <S.TextContent>
            <i>
              Chega de planilhas e <br /> metodos antigos
            </i>
          </S.TextContent>
          <S.TextSubContent>
            <i>
              Faça como grandes <br /> investidores de sucesso,
              <br /> tenha acesso as melhores <br /> ferramentas do mercado!
            </i>
          </S.TextSubContent>
        </S.Section2Content>

        <S.Section1Image>
          <figure>
            <S.ImgSection2 src={img} />
          </figure>
        </S.Section1Image>
      </S.Section2Container>
      <S.ButtonAction>
        <a href="#assine-2" style={{ textDecoration: "none", color: "white" }}>
          <p style={{ fontSize: "22px", paddingTop: "10px" }}>ASSINE JÁ</p>
        </a>
      </S.ButtonAction>
    </>
  );
};

export default Section2;
