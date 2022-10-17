import styled from "styled-components";

export const Box = styled.div`
display: flex;
background-color: gray;
padding-left: 20px;
@media screen and (max-width:600px){
        flex-direction: column;
        align-items: center;
    }

img{
    border-radius: 10px;
    width: 10%;
    padding: 5px;
    
    @media(max-width:600px){
        width: 20%;
        padding-top: 5px;
    }
}
`
export const Text = styled.h2`
     padding-top: 30px; 
     text-align:center; 
    font-family:Arial,Helvetica,sans-serif;
    color: greenyellow;
    font-size: 0,5em;
    background-color: gray;
h3{
    color: black;
    font-weight:bold;
    font-size:0.9em;
}
`
export const Text2 = styled.p`
color: black;
font-family:Arial,Helvetica,sans-serif;
padding-top: 30px;
padding-left: 30px;
h3{
    color: greenyellow;
}
`
