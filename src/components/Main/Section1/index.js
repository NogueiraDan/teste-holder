import React from "react";
import * as S from "./styled";
const Section1 = () => {
  return (
    <>
      <S.Section1Container>
        <S.Section1Image>
          {/* <img src="https://drive.google.com/file/d/1Lr2w9hgR5owzyXxYBUzQILaA7hg9JpeA/view?usp=sharing" /> */}
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
