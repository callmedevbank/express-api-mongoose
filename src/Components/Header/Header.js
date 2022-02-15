import React from "react";
import styled from "styled-components";




 export function Header(){
   return(
     
       <Container>
         <Logo />
         <NavHolder>
           <Nav>overview </Nav>
           <Nav>storefront</Nav>
           <Nav>pricing</Nav>
           <Nav>checkout Demo</Nav>
           <Nav>developers</Nav>
         </NavHolder>
         <HolderB>
           <Sign>sign in</Sign>
         <Button>Get Started</Button>
         </HolderB>
       </Container>
     
   )
 }

 const Container = styled.div`
    display: flex;
    width:100%;
    height:70px;
    justify-content:space-around;

 `;

 const Logo = styled.img`
 
 `;

 const NavHolder = styled.div`
  display:flex;
  width:50%;
  align-items:center;
  justify-content:space-around;
 `;

 const Nav = styled.span`
 
 `;
const Sign = styled.div`
     display:flex;
     align-items:center;
     justify-content:center;
     color:blue;
`
 const Button = styled.div `
  width: 150px;
  height: 40px;
  background-color: blue;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:3px;
  color:white;
  :hover{
    background-color:black;
    transition:all 350ms;
  }


 `;
 const HolderB = styled.div`
 display:flex;
 align-items:center;
 width:18%;
 justify-content:space-between;
 cursor:pointer;
 `