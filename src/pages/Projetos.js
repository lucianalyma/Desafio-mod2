import React from "react";
import Api from "../assets/api-pages.png";
import Finn from "../assets/finn.png";
import Harry from "../assets/harry.png";
import English from "../assets/english.png";
import Lista from "../assets/lista.png";
import Dog from "../assets/dog.png";
import * as S from "../Styles/ProjetosStyles";

export default function Projetos (){
    return(
       <>
       <S.Text>
       <h2>Imagens dos meus Projetos:</h2>
       </S.Text>
       <S.Box>
        <div>
       <img src={Api} alt=""/>
       <img src={Finn} alt=""/>
       <img src={Harry} alt=""/>
       <img src={English} alt=""/>
       <img src={Lista} alt=""/>
       <img src={Dog} alt=""/>
       </div>
       </S.Box>
       </>
         

    )
}