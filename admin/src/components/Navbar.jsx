import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {NotificationsRounded} from "@mui/icons-material";
import {LanguageRounded} from "@mui/icons-material";
import {SettingsRounded} from "@mui/icons-material";


const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top:0;
  z-index: 999;
  background-color: ${props => (props.color)};
  color: ${props => (props.elementColor)};
  transition: 1s ease;
`

const Left = styled.div`
  padding: 20px;
`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`

const Right = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`

const Circle = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${props => (props.color)};
  object-fit: cover;
  cursor: pointer;
  transition: 1s ease;
`

const Badge = styled.div`
  width: 10px;
  height: 10px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 12px;
  background-color: ${props => props.color};
  position: absolute;
  border-radius: 50%;
  font-weight: bold;
  color: white;
  transition: 1s ease;
`

const Language = styled.div`
  position: relative;
`

const Notification = styled.div`
  position: relative;
`



const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    const handleColor = () =>{
        if (window.scrollY>50){
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleColor)
    },[window.scrollY])

    return (
        <Container color={scroll? "black": "white"} elementColor={scroll? "white": "black"} >
            <Left>
                <Logo>NAMER.</Logo>
            </Left>
            <Right>
                <Notification>
                    <NotificationsRounded style={{marginRight: "10px", cursor:"pointer"}}/>
                    <Badge color={scroll? "darkslateblue": "red"}>2</Badge>
                </Notification>
                <Language>
                    <LanguageRounded style={{marginRight: "10px", cursor:"pointer"}}/>
                    <Badge color={scroll? "darkslateblue": "red"}>2</Badge>
                </Language>
                <SettingsRounded style={{marginRight: "10px", cursor:"pointer"}}/>
                <Circle src="https://i.ytimg.com/vi/wipC33d84sw/maxresdefault.jpg" color={scroll? "white": "black"}/>
            </Right>
        </Container>
    );
};

export default Navbar;