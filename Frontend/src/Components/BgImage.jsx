import styled from "styled-components"
import { sharedMobileMandL } from "../Responsive"
import pattern from "../images/bg-tablet-pattern.svg"

const Container = styled.div`
    background: url(${pattern}) no-repeat;
    background-position: 800px -300px;

    ${sharedMobileMandL({backgroundPosition:"100px -100px",
    backgroundSize:"100%"})}
`


const BackgroundImage = (props) => {
  return (
        <Container>
             {props.children}
        </Container>
  )
}

export default BackgroundImage