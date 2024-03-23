import styled from "styled-components"
import {  sharedMobileMandL, tablet } from "../Responsive"
import patternII from "../images/bg-tablet-pattern.svg"


const Container = styled.div`
    background: url(${patternII}) no-repeat;
    background-position: -450px 300px;

    ${sharedMobileMandL({backgroundPosition:"100px -100px",
    backgroundSize:"100%"})}
    ${tablet({background:"none !important"})}
` 


const BackgroundImageII = (props) => {
  return (
        <Container>
             {props.children}
        </Container>
  )
}

export default BackgroundImageII