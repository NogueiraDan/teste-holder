import React from "react";
import * as S from "./styled";
const Section2 = () => {
  return (
    <>
      <S.Section2Container>
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
          {/* <img src="https://drive.google.com/file/d/1Lr2w9hgR5owzyXxYBUzQILaA7hg9JpeA/view?usp=sharing" /> */}
        </S.Section1Image>
      </S.Section2Container>
      <S.ButtonAction>ASSINE JÁ</S.ButtonAction>
    </>
  );
};

export default Section2;
