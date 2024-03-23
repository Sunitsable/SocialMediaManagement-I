import React from 'react'
import styled from 'styled-components'
import { mobile, mobileS, sharedMobileMandL, tablet } from '../Responsive'

const RespnsiveLinkNav = styled.div`
    display: none;
    cursor: pointer;
    border-radius: 3%;
    padding: 30px 0;
    margin: auto;
    top: 20px;
    position: relative;
    width: 250px;
    height: 200px;
    transition: all 0.3s ease-in-out;
    /* transition: transform 4ms */
    ${sharedMobileMandL({display:"grid",
      flexFlow:"column"})}

  ${mobileS({display:"grid",
      flexFlow:"column"})}
      
    ${tablet({display:"grid",
      flexFlow:"column"})}
        
`
const ButtonNav = styled.button`
    border: 0;
    background: transparent;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    color: hsl(228, 39%, 23%);

    &:hover{
        color: hsl(227, 12%, 61%);
    }

   

    ${mobile({padding:"10px 0"})}
    ${mobileS({padding:"10px 0",
  fontSize:"14px"})}
    ${tablet({padding:"10px 0",
    fontSize:"18px"})}
`

const FloatNav = () => {
  return (
    <RespnsiveLinkNav>
        <ButtonNav>Pricing</ButtonNav>
        <ButtonNav>Product</ButtonNav>
        <ButtonNav>About Us</ButtonNav>
        <ButtonNav>Careers</ButtonNav>
        <ButtonNav>Community</ButtonNav>
    </RespnsiveLinkNav>
  )
}

export default FloatNav