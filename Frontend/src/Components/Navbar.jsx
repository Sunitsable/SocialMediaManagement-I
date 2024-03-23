import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import { laptop1024, mobile, mobileL, mobileS, sharedMobileMandL, tablet } from '../Responsive';
import FloatNav from './responsiveNavbar';
import Login from './Login';

const Container = styled.div`
  padding: 20px;

  ${mobile({ maxWidth: '100%', padding: '20px 0' })}

  ${mobileL({ padding: ' 20px 0' })}
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${sharedMobileMandL({ padding: '0' })}
`;

const Left = styled.div`
  flex: 1;
  text-align: start;
  padding-left: 60px;

  ${sharedMobileMandL({ paddingLeft: '0' })}
  ${tablet({ paddingLeft: '0' })}
  ${mobileS({ paddingLeft: '0' })}
`;

const Image = styled.img`
  ${sharedMobileMandL({ marginRight: '90px' })}
  ${tablet({ marginRight: '0', float: 'left', width: '120%' })}
`;

const Center = styled.div`
  flex: 2;
`;

const LinkNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
  cursor: pointer;
  ${sharedMobileMandL({ display: 'none' })}
  ${mobileS({ display: 'none' })}
  ${laptop1024({ margin: '0 90px' })}
  ${tablet({ display: 'none' })}
`;

const ButtonNav = styled.button`
  border: 0;
  background: transparent;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  color: hsl(228, 39%, 23%);
  width: 100px;

  &:hover {
    color: hsl(227, 12%, 61%);
  }

  ${laptop1024({ width: '100px' })}
  ${sharedMobileMandL({ display: 'none' })}
`;

const Right = styled.div`
  flex: 1;
`;

const ButtonRight = styled.button`
  background-color: hsl(12, 88%, 59%);
  color: #fff;
  border: none;
  border-radius: 50px;
  height: 50px;
  padding: 0 30px;
  cursor: pointer;

  &:hover {
    background-color: hsl(13, 100%, 70%);
  }

  ${sharedMobileMandL({ display: 'none' })}
  ${mobileS({ display: 'none' })}
  ${tablet({ display: 'none' })}
`;

const Span = styled.span`
  font-weight: 600;
`;

const ResponsiveButton = styled.div``;

const Hamburger = styled.button`
  display: none;
  width: 25px;
  height: 25px;
  background: url(${hamburger});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  transition: all 2s;

  &::before,
  &::after {
    transition: all 2s;
  }

  ${mobileS({ display: 'block' })}
  ${mobile({ display: 'block' })}
  ${mobileL({ display: 'Block' })}
  ${tablet({ display: 'Block', width: '40px', height: '40px', float: 'right' })}
`;

const Close = styled.button`
  width: 25px;
  height: 25px;
  background: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  display: none;

  ${mobileS({ display: 'block' })}
  ${mobile({ display: 'block' })}
  ${mobileL({ display: 'Block' })}
  ${tablet({ display: 'Block', width: '40px', height: '40px', float: 'right' })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, SetClicked] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    SetClicked(!clicked);
    setMenuVisible(!menuVisible);
  };

  const handleClickBack = () => {
    SetClicked(!clicked);
    setMenuVisible(!menuVisible);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={logo} alt="logo" />
        </Left>

        <Center>
          <LinkNav>
            <ButtonNav onClick={() => scrollToSection('pricing')}>Pricing</ButtonNav>
            <ButtonNav onClick={() => scrollToSection('product')}>Product</ButtonNav>
            <ButtonNav onClick={() => scrollToSection('about-us')}>About Us</ButtonNav>
            <ButtonNav onClick={() => scrollToSection('reviews')}>Reviews</ButtonNav>
            <ButtonNav onClick={() => scrollToSection('community')}>Community</ButtonNav>
          </LinkNav>
        </Center>

        <Right>
          <ButtonRight onClick={() => navigate('/login')}>
            <Span>Get Started</Span>
          </ButtonRight>

          <ResponsiveButton>
            {clicked ? (
              <Close onClick={handleClickBack} className="close"></Close>
            ) : (
              <Hamburger onClick={handleClick}></Hamburger>
            )}
          </ResponsiveButton>
        </Right>
      </Wrapper>
      {menuVisible && <FloatNav />}
    </Container>
  );
};

export default Navbar;
