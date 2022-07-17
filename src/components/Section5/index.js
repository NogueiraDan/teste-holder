import React from "react";
import * as S from "./styled";
import star from "../Section5/star.png";
import Accordion from "react-bootstrap/Accordion";

const Section5 = () => {
  return (
    <>
      <S.TitleSection5>
        <i>Veja o que as pessoas falam da Holder+</i>
      </S.TitleSection5>

      <S.BackgroundContainer>
        <S.ContainerDescription>
          <p>
            <i>Veja o que usuários Holder+ acham da plataforma</i>
          </p>
        </S.ContainerDescription>

        <S.Testimonials>
          <S.ElementTestimonials>
            <figure>
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
            </figure>
            <div style={{ marginTop: "10px" }}>
              <span
                style={{ color: "purple", fontSize: "20px", fontWeight: "500" }}
              >
                Alex Junior
              </span>
            </div>
            <br />
            <div style={{ marginTop: "20px" }}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vel quam in felis sodales tincidunt quis ut est.
                Curabitur maximus.
              </span>
            </div>
          </S.ElementTestimonials>
          <S.ElementTestimonials>
            <figure>
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
            </figure>
            <div style={{ marginTop: "10px" }}>
              <span
                style={{ color: "purple", fontSize: "20px", fontWeight: "500" }}
              >
                Guilherme
              </span>
            </div>
            <br />
            <div style={{ marginTop: "20px" }}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vel quam in felis sodales tincidunt quis ut est.
                Curabitur maximus.
              </span>
            </div>
          </S.ElementTestimonials>
          <S.ElementTestimonials>
            <figure>
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
            </figure>
            <div style={{ marginTop: "10px" }}>
              <span
                style={{ color: "purple", fontSize: "20px", fontWeight: "500" }}
              >
                Marcio Valerio
              </span>
            </div>
            <br />
            <div style={{ marginTop: "20px" }}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vel quam in felis sodales tincidunt quis ut est.
                Curabitur maximus.
              </span>
            </div>
          </S.ElementTestimonials>
          <S.ElementTestimonials>
            <figure>
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
              <S.StarRate src={star} />
            </figure>
            <div style={{ marginTop: "10px" }}>
              <span
                style={{ color: "purple", fontSize: "20px", fontWeight: "500" }}
              >
                João Ferreira
              </span>
            </div>
            <br />
            <div style={{ marginTop: "20px" }}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vel quam in felis sodales tincidunt quis ut est.
                Curabitur maximus.
              </span>
            </div>
          </S.ElementTestimonials>
        </S.Testimonials>
      </S.BackgroundContainer>

      <S.ButtonSection5>
        <p style={{ fontSize: "22px", paddingTop: "10px" }}>ASSINE JÁ</p>
      </S.ButtonSection5>
      <S.Garantia>
        <span style={{ fontSize: "26px", fontWeight: "bold" }}>
          7 DIAS SEM COMPROMISSO
        </span>
        <p style={{ color: "white", fontSize: "16px", wordBreak: "break-all" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          porta diam nec odio dictum volutpat. Cras pulvinar dui ut mollis
          elementum. Quisque rutrum est lobortis ligula malesuada pellentesque.
          Morbi non.
        </p>
        <p
          style={{
            color: "gray",
            fontSize: "16px",
            wordBreak: "break-all",
            fontWeight: "500",
          }}
        >
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </S.Garantia>
      <p style={{ fontSize: "30px", marginTop: "30px" }}>
        <i>FAQ</i>
      </p>
      <S.Questions>
        <S.Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.Question>
        <S.Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.Question>
        <S.Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.Question>
        <S.Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.Question>
        <S.Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.Question>
      </S.Questions>
    </>
  );
};

export default Section5;
