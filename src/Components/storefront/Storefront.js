import React from "react";
import styled from "styled-components";
// import Pic from "./images/dominos.png"



export function Storefront(){

return(
    <Outbox>
        <Inbox>
            <Box1>  
            <Big>Get paid securely,How and when you Want</Big>
               <Small>as with of our tools, payments are central to the experience.even with online payment you benefit from our lower Rates fast deposits.quickteller business seamlessly integrate</Small>
               <Cards>
                   <San2>
                   <Code>cards</Code>
                   <Code>ussd</Code>
                   <Code>bank Transfer</Code>
                   </San2>
                   <San>
                   <Code>QR</Code>
                   <Code>paycode</Code>
                   <Code>mobile money</Code>
                   </San>
               </Cards>
            </Box1>
            <Box2>
                for images
                <Ben/>
            </Box2>
        </Inbox>
    </Outbox>
)




    
}

const Outbox = styled.div`
 width:100%;
 height:600px;
 
 display:flex;
 align-items:center;
 justify-content:center;
`;
const Inbox = styled.div`
width:80%;
 height:550px;
 display:flex;
 justify-content:space-between;
`

const Code = styled.span`

 
`;
const Big = styled.h1`
width:400px;
 
 
 
`;
const Small = styled.p`
width:400px;
 

 
`;
const Box1 = styled.div`
 width:450px;
 height:400px;
 
 
`;
const Box2= styled.div`
 width:500px;
 height:400px;
 
 
`;
const Cards = styled.div`
width:400px;
 height:70px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 flex-direction:column;
 
`;
const Ben = styled.img`

`
const San = styled.div`
width:400px;
display:flex;
justify-content:space-between;
align-items:center;

`
const San2 = styled.div`
width:400px;
display:flex;
justify-content:space-between;
align-items:center;
`