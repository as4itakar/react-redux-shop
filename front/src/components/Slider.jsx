import React, {useState} from 'react';
import styled from "styled-components";
import {BiLeftArrow} from "react-icons/all";
import {BiRightArrow} from "react-icons/all";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  
`

const Arrow = styled.div`
  width: 50px; 
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  overflow: hidden;
  z-index: 2;
  
  &:hover{
    opacity: 1;
  }
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  
`

const Image = styled.img`
    height: 100%;
    width: 80%;
`

const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 15px;
  font-size: 25px;
  background-color: transparent;
  cursor: pointer;
  border: 5px solid black;
  border-radius: 1rem;
  font-weight: bold;
  
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>{
        if (direction === "left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1: 2)
        }else{
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <BiLeftArrow/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
               <Slide bg="ff9900">
                   <ImgContainer>
                       <Image src="https://ae04.alicdn.com/kf/U27eb80e5e28e416a8c9562640d95c460k/001.jpg"/>
                   </ImgContainer>
                   <InfoContainer>
                        <Title>ONLY FOR HYPEBEAST.</Title>
                       <Desc>I SEE YOU LIKE TO LOOK GREAT BUT I LIKE YOUR MOM.</Desc>
                       <Button>SHOW NOW</Button>
                   </InfoContainer>
               </Slide>
                <Slide bg="6495ed">
                    <ImgContainer>
                        <Image src="https://ae04.alicdn.com/kf/Udb6bef48f8ad473194588ce943730c7eN/Genshin-Impact.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>ONLY FOR.</Title>
                        <Desc>I SEE YOU LIKE TO LOOK GREAT BUT I LIKE YOUR MOM.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="7366bd">
                    <ImgContainer>
                        <Image src="https://ae04.alicdn.com/kf/U793713f0c3a141f4825482319e608ae1y/-.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>ONLY HYPEBEAST.</Title>
                        <Desc>I SEE YOU LIKE TO LOOK GREAT BUT I LIKE YOUR MOM.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <BiRightArrow/>
            </Arrow>
        </Container>
    );
};

export default Slider;