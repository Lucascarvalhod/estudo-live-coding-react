import styled from "styled-components";

export const HeaderContainer = styled.header`
width:100%;
height:4rem;
display:flex;
justify-content:space-between;
align-items:center;
background-color:gray;
position:fixed;
top:0;
z-index:100;
border-solid:1px black;
box-shadow:2px
`;

export const Logo = styled.div`
margin-left:2rem;
`;

export const CartIcon = styled.button`

`;

export const CartCount = styled.span`
position:absolute;
top:-0.8rem;
right:-0.4rem;
font-size:1.2rem;
color:red;
`;

export const CartContainer = styled.div`
display:flex;
margin-right:2rem;
position:relative;

`;