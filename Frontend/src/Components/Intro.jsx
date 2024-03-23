import styled from "styled-components"
import { mobile, mobileL, mobileS, sharedMobileMandL, tablet } from "../Responsive"
import introImage from "../images/illustration-intro.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    flex-direction: row;
    padding: 20px;
    text-align: start;

    ${mobile({padding:"0"})}

     ${mobileL({padding:"10px"})}

    ${sharedMobileMandL({height:"180vh",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center"})}

    ${tablet({height:"150vh",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    padding:"30px"})}
    
    ${mobileS({height:"150vh",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px"})}
     
`
const Left = styled.div`
    flex: 1;
    margin: 0 70px;

    ${sharedMobileMandL({margin:"0",
    order:"2"})}
    ${tablet({margin:"0",
    order:"2"})}
    ${mobileS({margin:"0",
    order:"2"})}
`
const Title = styled.h1`
    color: hsl(228, 39%, 23%);
    font-weight: 800;
    font-size: 50px;

    ${mobile({fontSize:"30px"})}
    
    ${mobileL({fontSize:"20px"})}

    ${sharedMobileMandL({textAlign:"center",
    marginBottom:"40px"})}

    ${mobileS({textAlign:"center",
    marginBottom:"40px",
    fontSize:"26px"})}

    ${tablet({textAlign:"center",
    marginBottom:"40px",
    fontSize:"40px"})}
`
const Desc = styled.p`
    color: hsl(227, 12%, 61%);
    text-align: justify;
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 600;
    margin-right: 220px;
    line-height: 1.5;

    ${sharedMobileMandL({textAlign:"center", marginRight:"0"})}
    ${mobileS({margin:"10px",
    fontSize:"14px"})}
    ${tablet({textAlign:"center",
    marginRight:"0",
    fontSize:"18px"})}

`
const ButtonIntro = styled.button`
    background-color: hsl(12, 88%, 59%);
    color: #fff;
    border: none;
    border-radius: 50px;
    height: 50px;
    padding: 0 30px;
    cursor: pointer;
    margin-top: 30px;

    &:hover{
        background-color: hsl(13, 100%, 70%);
    }

    ${sharedMobileMandL({margin:"50px 0 0 100px"})}
    ${mobileS({margin:"50px 0 0 80px"})}
    ${tablet({margin:"50px 0 0 270px",
    justifyContent:"center"})}
`
const SpanButton = styled.span`
    font-weight: 600;
`

const Right = styled.div`
    flex: 1;
    margin: 0 70px;

    ${sharedMobileMandL({margin:"0",
    order:"1"})}
    ${tablet({margin:"0",
    order:"1"})}
    ${mobileS({margin:"0",
    order:"1"})}
`
const ImageRight = styled.img`
    width: 500px;
    height: 100%;

    ${mobile({maxWidth:"100%"})}
    ${mobileL({maxWidth:"100%"})}
    ${mobileS({maxWidth:"100%"})}
    ${tablet({maxWidth:"100%"})}
`

const Intro = () => {
    const navigate = useNavigate();

  return (
    <Container>
            <Left>
                <Title>Bring everyone together to build better products.</Title>
                <Desc>Get Predictions of Your Content, Compare the Social Media Platform for Increasing your Contents Reach.</Desc>
                <ButtonIntro onClick={() => navigate('/login')}>
                    <SpanButton>Get Strated</SpanButton>
                </ButtonIntro>
            </Left>
            <Right>
                <ImageRight src={introImage} alt="chart"/>
            </Right>
    </Container>
  )
}

export default Intro