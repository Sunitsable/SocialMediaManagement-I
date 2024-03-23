import { useState } from "react"
import styled from "styled-components"
import logoFooter from "../images/logo.svg"
import facebook from "../images/icon-facebook.svg"
import youtube from "../images/icon-youtube.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"
import { mobile, mobileL, mobileS, sharedMobileMandL } from "../Responsive"

const Container = styled.div`
    width: 100%;
    height: 60vh;

    ${mobileS({maxWidth:"100%",
    height:"120vh",
    flexDirection: "column"})}

    ${sharedMobileMandL({maxWidth:"100%",
    flexDirection: "column"})}
`
const Announecemnt = styled.div`
    height: 30vh;
    background-color: hsl(12, 88%, 59%);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobileS({height:"90vh",
    display:"grid",
    justifyContent:"center",
    alignItems:"center",
    padding:"30px 30px"})}

    ${sharedMobileMandL({height:"60vh",
    display:"grid",
    justifyContent:"center",
    alignItems:"center",
    padding:"30px 30px"})}
`
const Title = styled.h1`
    color: hsl(0, 0%, 98%);
    font-weight: 700;
    text-align: start;
    margin-left: 110px;
    letter-spacing: 1px;

    ${mobileS({textAlign:"center", 
    fontSize:"30px",
    marginLeft:"0"})}

    ${sharedMobileMandL({textAlign:"center", 
    fontSize:"34px",
    marginLeft:"0"})}
`
const ButtonAnnouncement = styled.button`
    background-color: hsl(0, 0%, 98%);
    color: #fff;
    border: none;
    border-radius: 50px;
    width: 150px;
    height: 50px;
    cursor: pointer;
    margin-right: 150px;

    &:hover{
        background-color: hsl(13, 100%, 70%);
    }

    ${mobileS({margin:"0 0 40px 70px",
    justifyContent:"center",
    alignItems:"center"})}

    ${sharedMobileMandL({margin:"0 0 40px 70px",
    justifyContent:"center",
    alignItems:"center"})}
`
const Span = styled.span`
    font-weight: 600;
    color: hsl(12, 88%, 59%);
`


const FooterInfo = styled.div`
    background-color: hsl(233, 12%, 13%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30vh;

    ${mobileS({height:"140vh",
    flexDirection: "column"})}

    ${sharedMobileMandL({height:"140vh",
    flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: grid;
    justify-content: center;
    align-items: center;

    ${mobileS({order:"3"})}

    ${sharedMobileMandL({order:"3"})}
`
const Image = styled.img`
    margin-bottom: 70px;
    filter: invert(100%);
    
    ${mobileS({order:"2",
    margin:"0 0 50px 80px"})}

    ${sharedMobileMandL({order:"2",
    margin:"0 0 50px 80px"})}
`
const Icons = styled.div`
    justify-content: center;
    align-items: center;

    ${mobileS({order:"1"})}
    
    ${sharedMobileMandL({order:"1"})}
`
const Icon = styled.img`
    margin: 0 5px;
    cursor: pointer;
    

    &:hover{
        filter: invert(71%) sepia(21%) saturate(3309%) hue-rotate(317deg) brightness(101%) contrast(101%);;
    }

    ${mobileS({marginRight:"18px",
    width:"30px"})}

    ${sharedMobileMandL({marginRight:"25px",
    width:"30px"})}
`


const Center = styled.div`
    flex: 1;  
    display: flex;
    
    ${mobileS({order:"2"})}

    ${sharedMobileMandL({order:"2"})}
`
const LeftLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    ${mobileS({marginRight:"40px"})}

    ${sharedMobileMandL({marginRight:"80px"})}
`
const RightLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Link = styled.a`
    margin: 7px 0;
    text-align: start;
    color: hsl(0, 0%, 98%);
    font-size: 14px;
    cursor: pointer;
    

    &:hover{
        color: hsl(13, 100%, 70%);
    }

    ${mobileS({width:"100px"})}

    ${sharedMobileMandL({width:"100px"})}
`


const Right = styled.div`
    flex: 1;

    ${mobileS({order:"1"})}

    ${sharedMobileMandL({order:"1"})}
`
const Form = styled.form`
    display: flex;
    margin-bottom: 50px;

    ${mobileS({marginTop:"50px"})}

    ${sharedMobileMandL({marginTop:"50px"})}
`
const Text = styled.div`
    flex-direction: column;
`
const TextField = styled.input`
    border-radius: 50px;
    height: 50px;
    width: 200px;
    border: none;
    margin-right: 20px;
    
`
const Error = styled.span`
    color: red;
    font-size: 10px;
    text-align: start;
    white-space: nowrap;
`
const SubmitButton = styled.input`
    background-color: hsl(12, 88%, 59%);
    color: #fff;
    border: none;
    border-radius: 50px;
    height: 50px;
    width: 100px;
    cursor: pointer;
    font-weight: 800;
    right: 50px;

    &:hover{
        color: hsl(13, 100%, 70%);
    }

    ${mobileS({right:"5px"})}

    ${mobile({right:"5px"})}
`
const Copyright = styled.p`
    color: hsl(0, 0%, 98%, 30%);
    font-weight: 400;
    font-size: 12px;
    margin-right: 120px;

    ${mobileS({position:"relative",
    top:"360px",
    left:"60px"})}
    
    ${sharedMobileMandL({position:"relative",
    top:"360px",
    left:"60px"})}

    ${mobileL({top:"400px"})}
`


const Footer = () => {

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = e => {
    if (!isValidEmail(e.target.value)) {
      setError('Please insert a valid email');
    } else {
      setError(null);
    }

    setMessage(e.target.value);
  };

  return (
    <Container>
        <Announecemnt>
            <Title>Simplify how your team <br/> works today.</Title>
            <ButtonAnnouncement>
                <Span>Get Strated</Span>
            </ButtonAnnouncement>
        </Announecemnt>
        <FooterInfo>
            <Left>
            <Image src={logoFooter} style={{fill:"white"}} alt="logo"/>
            <Icons>
                <Icon src={facebook} alt="icon of facebook"/>
                <Icon src={youtube} alt="icon of youtube"/>
                <Icon src={twitter} alt="icon of twitter"/>
                <Icon src={pinterest} alt="icon of pinterest"/>
                <Icon src={instagram} alt="icon of instagram"/>
            </Icons>
            </Left>

            <Center>
                <LeftLinks>
                    <Link>Home</Link>
                    <Link>Pricing</Link>
                    <Link>Products</Link>
                    <Link>About Us</Link>
                </LeftLinks>
                <RightLinks>
                    <Link>Careers</Link>
                    <Link>Community</Link>
                    <Link>Privacy Policy</Link>
                </RightLinks>
            </Center>
            <Right>
                <Form>
                    <Text>
                <TextField type="email" 
                    id="userEmail"
                    aria-label="Updates in your inbox..."
                    value={message}
                    onChange={handleChange}
                    />
                {error && <Error>{error}</Error>}
                    </Text>
                <SubmitButton type="submit" value="Go"/>
                </Form>
                <Copyright>Copyright 2020. All Rights Reserved</Copyright>
            </Right>
        </FooterInfo>
    </Container>
  )
}

export default Footer