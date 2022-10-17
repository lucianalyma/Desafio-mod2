import React from "react"
import * as S from "../Styles/HeaderStyle"; 
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <S.Header>
            <S.H1>LL</S.H1>
            <S.Ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/projetos"><li>Projetos</li></Link>
                <Link to="/desenvolvimento"><li>Desenvolvimento</li></Link>
                <Link to="/contatos"><li>Contatos</li></Link>
            </S.Ul>

        </S.Header>
    )
}