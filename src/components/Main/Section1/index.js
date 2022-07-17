import React from "react";
import * as S from "./styled";
import img from "../Section1/telas.png";
const Section1 = () => {
  return (
    <>
      <S.Section1Container>
        <S.Section1Image>
          <figure>
            <S.ImgSection1 src={img} />
          </figure>
        </S.Section1Image>

        <S.Section1Content>
          <S.TextContent>
            <i>
              A melhor forma de <br />
              acompanhar e gerenciar
              <br /> a sua carteira de
              <br />
              investimentos!
            </i>
          </S.TextContent>

          <S.TextSubContent>
            <i>
              Tenha acesso as melhores ferramentas
              <br /> do mercado: Rebalanceamento dos <br /> ativos, extrato
              completo de suas <br /> operações, rentabilidade atualizada e{" "}
              <br /> MUITO mais!
            </i>
          </S.TextSubContent>
        </S.Section1Content>
      </S.Section1Container>
    </>
  );
};

export default Section1;
