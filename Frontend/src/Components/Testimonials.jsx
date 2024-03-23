import styled from "styled-components"
import {slideItems} from "../Data"
import { mobile, mobileS, sharedMobileMandL } from "../Responsive";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import "swiper/css/pagination"

import {Pagination} from 'swiper';

const Container = styled.div`
    width: 100%;
    height: 110vh;
    justify-content: center;
    align-items: center;

    ${mobileS({maxWidth:"100%",
     height:"160vh"})}
    
    ${sharedMobileMandL({maxWidth:"100%",
     height:"150vh"})}
`
const TitleTestimonials = styled.h2`
    color: hsl(228, 39%, 23%);
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 70px;

    ${mobileS({fontSize:"30px"})}
    
`
const Wrapper = styled.div`
`
const ProfileContainer = styled.div`
    height: 350px;
    margin-top: 40px;

    ${mobileS({marginTop:"30px"})}
`
const Profile = styled.div`
    position: relative;
    width: 450px;
    height: 250px;
    background-color: hsl(0, 0%, 98%);
    margin: 0 20px;
    align-content: center;
    justify-content: center;

    ${mobileS({height:"260px",
    width: "300px",
    margin: "0"
    })}

    ${mobile({width:"375px",
    height:"300px"})}
`
const ProfileImage = styled.img`
    position: absolute;
    bottom: 210px;
    left: 195px;
    height: 30%;

    ${mobileS({left:"110px"})}

    ${mobile({bottom:"250px",
    left:"145px"})}
`
const ProfileName = styled.h4`
    padding-top: 60px;
    color: hsl(228, 39%, 23%);
    font-weight: 800;

    ${mobileS({fontWeight:"700", paddingTop:"60px"})}

    ${mobile({paddingTop:"80px"})}
`
const ProfileQuote = styled.p`
    color: hsl(227, 12%, 61%);
    line-height: 1.5;
    padding: 10px;

    ${mobileS({lineHeight:"1.5", margin:"10px"})}

    ${mobile({lineHeight:"2"})}
`
const ButtonAbout = styled.button`
    background-color: hsl(12, 88%, 59%);
    color: #fff;
    border: none;
    border-radius: 50px;
    height: 50px;
    padding: 0 30px;
    cursor: pointer;

    &:hover{
        background-color: hsl(13, 100%, 70%);
    }
`
const Span = styled.span`
    font-weight: 600;
`
const Testimonials = () => {

          

  return (
    <Container id="reviews">
            <TitleTestimonials>What they've said</TitleTestimonials>

                <Wrapper>
                    <Swiper
                    style={{marginTop: 10}}
                     modules={[Pagination]}
                     centeredSlides={true}
                     spaceBetween={140}
                     slidesPerView={3}
                     pagination={{clickable: true }}
                     breakpoints={{
                        375:{
                            width: 375,
                            slidesPerView: 1
                        },
                        320:{
                            slidesPerView: 1,
                        }
                     }}
                     scrollbar={{ draggable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                    >                    
                {slideItems.map(item =>(
                    <SwiperSlide>
                            <ProfileContainer>
                            <Profile>
                                <ProfileImage src={item.img} alt={item.alt}/>
                                <ProfileName>{item.name}</ProfileName>
                                <ProfileQuote>"{item.quote}"</ProfileQuote>
                            </Profile>
                    </ProfileContainer>
                        </SwiperSlide>
                ))}
                </Swiper>
                </Wrapper>
       <ButtonAbout>
            <Span>Get Strated</Span>
        </ButtonAbout>
       
    </Container>
  )
}
export default Testimonials
