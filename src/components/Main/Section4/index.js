import React from "react";
import * as S from "./styled";
import premium from "../Section3/icon.png";
import grafico from "../Section3/grafico-de-barras.png";
import gpizza from "../Section3/grafico-de-pizza.png";

const Section3 = () => {
  return (
    <>
      <S.ContainerCarrossel className="carrossel">
        <S.ElementCarrosel>
          <S.ElementTitle>
            <i>PREMIUM</i>
          </S.ElementTitle>
          <S.ElementContent>
            Diversos gráficos para auxiliar no acompanhamento e gerenciamento da
            sua carreira patrimonial
          </S.ElementContent>
        </S.ElementCarrosel>

        <S.ElementCarrosel>
          <S.ElementTitle>
            <i>PARTIMONIO CONSOLIDADO</i>
          </S.ElementTitle>
          <S.ElementContent>
            Tenha todos os seus investimentos consolidados em uma só carteira.
            Somos a plataforma que oferece o maior leque de aplicações
            financeiras do mercado.
          </S.ElementContent>
        </S.ElementCarrosel>

        <S.ElementCarrosel>
          <S.ElementTitle>
            <i>REBALANCEAMENTO</i>
          </S.ElementTitle>
          <S.ElementContent>
            Ferramenta inedita para não deixar as emoções do mercado abalarem
            sua estratégia de investimento! Com o rebalanceamento você poderá
            atribuir uma nota ou porcentagem ideal para cada classe e ativo.
          </S.ElementContent>
        </S.ElementCarrosel>
      </S.ContainerCarrossel>
    </>
  );
};

export default Section3;
