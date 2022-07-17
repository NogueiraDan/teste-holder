import React from "react";
import * as S from "./styled";
import logo from "../Header/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <S.HeaderContainer>
          <figure>
            <S.Logo src={logo} />
          </figure>
          <S.Timer>&#129517;&#65039; 01D: 05H : 28M : 40S </S.Timer>
          <S.ButtonHeader>ASSINE AGORA</S.ButtonHeader>
        </S.HeaderContainer>
      </header>
    </>
  );
};

export default Header;
