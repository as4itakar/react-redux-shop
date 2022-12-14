import React from 'react';
import styled from "styled-components";
import {FiFacebook} from "react-icons/all";
import {FiInstagram} from "react-icons/all";
import {FiTwitter} from "react-icons/all";
import {MdRoom} from "react-icons/all";
import {FaPhone} from "react-icons/all";
import {GoMail} from "react-icons/all";


const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Logo = styled.h1`
  
`

const Desc = styled.p`
  margin: 20px 0;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 30%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    NAMER.
                </Logo>
                <Desc>
                    Twelve-figure estate plan, that was the escape plan
                    But hate investigatin', that shit was a waste, man
                    But wait, I stopped the facin' 'cause shit just start erasin'
                    But wait, it opened gates and this shit just start paradin', olé (Let's go)
                    We out the basement, on one floor where it's vacant
                    She feelin' anxious to be out where it's dangerous, okay (It's lit)
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FiFacebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <FiInstagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FiTwitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Usefull Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MdRoom style={{marginRight:"10px"}}/> 622 Dixie Path, South Tobinchester 98336.
                </ContactItem>
                <ContactItem>
                    <FaPhone style={{marginRight:"10px"}}/> +8 965 575-27-78
                </ContactItem>
                <ContactItem>
                    <GoMail style={{marginRight:"10px"}}/> sevaobuxov@uwu.com
                </ContactItem>
                <Payment src="https://salonoboev.com/image/paymenticon.png"/>
            </Right>
        </Container>
    );
};

export default Footer;