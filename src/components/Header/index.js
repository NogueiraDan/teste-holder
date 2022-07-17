import React from "react";
import * as S from "./styled";
import logo from "../Header/logo.png";
import Section2 from "../Main/Section2";

const Header = () => {
  const click = () => {
    <Section2 />;
  };
  return (
    <>
      <header>
        <S.HeaderContainer>
          <figure>
            <S.Logo src={logo} />
          </figure>
          <S.Timer>&#129517;&#65039; 01D: 05H : 28M : 40S </S.Timer>

          <S.ButtonHeader>
            <a
              href="#assine"
              style={{ textDecoration: "none", color: "white" }}
            >
              ASSINE AGORA
            </a>
          </S.ButtonHeader>
        </S.HeaderContainer>
      </header>
    </>
  );
};

export default Header;
