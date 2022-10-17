import React from "react"
import * as S from "../Styles/FooterStyles"; 
import Insta from "../assets/icon-instagram.png";
import Linkedin from "../assets/icon-linkedin.png";
import Facebook from "../assets/face2.png";
import Telegram from "../assets/telegram.png";

export  default function Footer () {
    return(
        <S.Footer>
        
        <img src={Insta} alt=""/>
        <img src={Linkedin} alt=""/>
        <img src={Facebook} alt=""/>
        <img src={Telegram} alt=""/>

        </S.Footer>
    )
}