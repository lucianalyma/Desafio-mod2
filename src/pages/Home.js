import React from "react";
import * as S from "../Styles/HomeStyles";
import Perfil from "../assets/foto perfil.jpg"

export default function Home() {
    return (
      <section>
        <S.Home>
        <img src={Perfil} alt="perfil"/>

      <div>
         <h2>LUCIANA LIMA</h2>
         <p>Sou Educadora há mais de nove anos, mas foi no momento pandêmico que decidi me reinventar, logo agarrei a oportunidade de fazer o curso Desenvolvedor front-end, e este foi, sem dúvida, um dos principais desafios da minha vida profissional. Portanto, não sou, estou sendo.</p>
      </div>
      </S.Home>
      </section>
    );
  }