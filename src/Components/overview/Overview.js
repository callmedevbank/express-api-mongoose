import React from "react";
import styled from "styled-components";

export function Overview(){
    return(
        <HomeScreen>
         <Innerbox> 
             <Box1>
                 <Big>All the Tools You Need to Grow your business,in one place</Big>
                 <Small>our suite of integrated tools saves you time,so you can focus on growing revenue and delivering exceptional service to your custormer</Small>
                 <Button>get started</Button>
             </Box1>
             <Box2>this i second box</Box2>
             
         </Innerbox>
        </HomeScreen>
    )
}

const HomeScreen=styled.div`

width:100%;
height:600px;
display:flex;
align-items:center;
justify-content:center;
`;
const Innerbox= styled.div`
width:80%;
height:500px;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Box1 = styled.div `
width:380px;
height:400px

`;
const Big = styled.h1`
width:380px
`;
const Small = styled.p`
width:400px;
`;
const Button = styled.div`
width: 150px;
height: 40px;
background-color: blue;
display:flex;
align-items:center;
justify-content:center;
border-radius:3px;
color:white;
cursor:pointer;
:hover{
  background-color:black;
  transition:all 350ms;
}
`;
const Box2 = styled.div`
width:500px;
height:350px;
`;