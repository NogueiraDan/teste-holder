import React from "react";
import * as S from "./styled";
const Section1 = () => {
  return (
    <>
      <S.Section1Container>
        <S.Section1Image>
          DIV IMAGEM
          <img src="https://drive.google.com/file/d/1Lr2w9hgR5owzyXxYBUzQILaA7hg9JpeA/view?usp=sharing" />
        </S.Section1Image>

        <S.Section1Content>
          <p>
            A melhor forma de acompanhar e gerenciar a sua carteira de
            investimentos!
          </p>
        </S.Section1Content>
      </S.Section1Container>
    </>
  );
};

export default Section1;
