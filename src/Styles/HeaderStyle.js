import styled from "styled-components";

export const Header = styled.header`
background-color: gray;
width:100%;  
margin: 0 auto;
    

`;

export const H1 = styled.h1`
display: none;
@media screen and (max-width:600px){
color: purple;

}
`;
export const Ul = styled.ul`
display:flex;
justify-content: space-evenly;
padding-left: 300px;
padding-top: 10px;
li{
    color: pink;
    font-family:Arial,Helvetica,sans-serif;
    @media screen and (max-width:600px){
        display: none;
}
}
`