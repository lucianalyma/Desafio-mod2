import styled from "styled-components";

export const Home = styled.div`
border: solid pink;
background-color: gray;
display: flex;
@media screen and (max-width:600px){
}
img{
    width: 50%;
    padding-left: 100px;
    padding-top: 20px;
    border-radius: 30px;
    padding-bottom: 10px;

}
h2{
    color: purple;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding-top: 80px;
    font-size: 3em;
    @media screen and (max-width:600px){
        font-size:1em;
}
}
p{
    color: ghostwhite;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.3em;
    padding-left: 10px;
    @media screen and (max-width:600px){
        font-size:1em;
}
}
`


