import styled from "styled-components";

export const Text = styled.h2`
text-align: center;
color: purple;
background-color: gray;
font-family: Arial, Helvetica, sans-serif;
padding-top: 20px;
`

export const Box = styled.div`
width: 50%;
@media(max-width:400px){
        display:flex;
        flex-direction:column;
    }
`

