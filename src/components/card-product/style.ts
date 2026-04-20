import styled from "styled-components";

export const Container = styled.div`
width:100%;
border:1px solid black;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:2rem;
border-radius:8px;
background-color:white;


transition:all 0.3s ease;

&:hover{
   scale:1.05;
}
`;

export const Image = styled.img`
width:80%;
height:60%;
padding:1rem;
border-radius:8px;
margin-top:1.5rem;
background-color:lightgray;
`;

export const Description = styled.span`
display:flex;
justify-content:center;
align-items:center;
font-size:1.1rem;
font-weight:600;
`;

export const Price = styled.span`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
font-size:1.1rem;
font-weight:600;
`;

export const Button = styled.button`
background-color:blue;
padding:0.5rem;
border-radius:8px;
margin-bottom:1rem;
color:white;

transition:all 0.3s ease;

&:hover{
    background-color:darkblue;
    color:white;
}
`;