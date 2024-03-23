import styled from "styled-components"
import {aboutList} from "../Data"
import { mobile, mobileL, mobileS, sharedMobileMandL, tablet } from "../Responsive"

const Container =styled.div`
    width: 100%;
    height: 120vh;
    align-items: start;
    justify-content: start;
    display: flex;
    flex-direction: row;
    text-align: start;
    padding: 20px;

    ${mobile({height:"210vh"})}

    ${mobileL({height:"250vh"})}

    ${sharedMobileMandL({maxWidth:"100%",
    flexDirection: "column",
    alignItems:"center",
    textAlign:"center",
    padding:"0"
    })}

    ${mobileS({maxWidth:"100%",
    flexDirection: "column",
    alignItems:"center",
    textAlign:"center",
    padding:"0",
    height:"280vh"
    })}


    ${tablet({maxWidth:"100%",
    flexDirection: "column",
    alignItems:"center",
    textAlign:"center",
    padding:"0",
    height:"190vh"
    })}
`
const Left =styled.div`
    flex: 1;
    margin: 0 70px;

    ${mobileS({margin:"0",
    paddingTop:"20px",
    })}

    ${sharedMobileMandL({margin:"0",
    paddingTop:"20px",
    })}

    ${tablet({margin:"0",
    paddingTop:"20px",
    })}
`
const TitleAbout =styled.h2`
    color: hsl(228, 39%, 23%);
    font-weight: 800;
    font-size: 35px;

    ${mobileS({fontWeight:"700",
    margin:"0",
    fontSize:"24px"})}

    ${mobile({fontWeight:"700",
    margin:"0"})}
    ${tablet({fontWeight:"800",
    margin:"0"})}
`
const Desc =styled.p`
    color: hsl(227, 12%, 61%);
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    margin-right: 200px;
    line-height: 2;

    ${mobileS({margin:"20px",
    textAlign:"center"})}

    ${sharedMobileMandL({margin:"20px",
    textAlign:"center"})}

    ${tablet({margin:"20px",
    textAlign:"center",
    fontSize:"20px"})}

    ${mobileL({fontSize:"18px"})}
`
const Right =styled.div`
    flex: 1;
    margin: 0 70px;

    ${mobileS({margin:"0"})}

    ${sharedMobileMandL({margin:"0"})}

    ${tablet({margin:"0"})}
`
const InfoContainer =styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 0;

    ${mobileS({margin:"0",
    position:"relative"})}

    ${mobile({margin:"0",
    position:"relative"})}
`
const Numerotation =styled.div`
    flex: 1;
    justify-content: center;
    text-align: center;
    background-color: hsl(12, 88%, 59%);
    border: none;
    border-radius: 50px;
    padding: 0;
    margin-right: 30px;
    height: 40px;

    ${mobile({margin:"0",
    position:"absolute",
    padding:"0 25px"})}
`
const Number =styled.span`
    color: hsl(0, 0%, 98%);
    font-size: 15px;
    font-weight: 600;
    line-height: 40px;
    vertical-align: middle;
`
const TitleContainer =styled.div`
    flex: 6;
`
const SubTitle =styled.h3`
    padding: 0;
    margin-top: 10px;
    color: hsl(228, 39%, 23%);
    font-weight: 800;

    ${mobileS({marginLeft:"10px",
    fontWeight:"700",
    fontSize:"18px"})}

    ${mobile({marginLeft:"60px",
    fontWeight:"700",
    fontSize:"18px"})}
    ${tablet({marginLeft:"60px",
    fontSize:"20px"})}
`
const SubDesc =styled.p`
    color: hsl(227, 12%, 61%);
    text-align: justify;
    font-size: 15px;
    font-weight: 600;
    margin-right: 20px;
    line-height: 1.5;

    ${mobileS({zIndex:"2",
    margin:"10px",
    lineHeight: "2",
    fontSize:"14px"})}

    ${mobile({zIndex:"2",
    margin:"10px",
    lineHeight: "2"})}

    ${tablet({zIndex:"2",
    margin:"10px",
    lineHeight: "2",
    fontSize:"16px"})}
`

const About = () => {
  return (
    <Container id="about-us">
        <Left>
          <TitleAbout>What's different about Manage?</TitleAbout>
          <Desc>Manage provides all the functuality your team needs, 
            without the complexity. 
            Our software is tailor-made for modern ddigital product teams</Desc>
        </Left>
          <Right aboutList={aboutList}>
            {aboutList.map(item=> (
            <InfoContainer>
             <Numerotation><Number>{item.num}</Number></Numerotation>
              <TitleContainer>
             <SubTitle>{item.aboutSubTitle}</SubTitle>
             <SubDesc>{item.descSubTitle}</SubDesc>
             </TitleContainer>
             </InfoContainer>
            ))}
        </Right>
    </Container>
  )
}

export default About