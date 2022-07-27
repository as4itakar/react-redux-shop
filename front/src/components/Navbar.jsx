import React from 'react';
import styled from "styled-components";
import {GoSearch} from "react-icons/all";
import {Badge} from "@mui/material";
import {BiCart} from "react-icons/all";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`

const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center"})}
`

const Center = styled.div`
  flex:1;
  text-align: center;
`

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 20px;
  ${mobile({fontSize: "12px", marginLeft:"10px"})}
`

const Navbar = () => {
    const user = useSelector(state => state.user)
    const quantity = useSelector(state => state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <GoSearch style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        NAMER.
                    </Logo>
                </Center>
                <Right>
                    {!user? <MenuItem>
                            REGISTER
                        </MenuItem>
                        :null}
                    {!user? <MenuItem>
                        SIGN IN
                    </MenuItem>:null}
                    <MenuItem>
                        <Link style={{color: "black"}} to="/cart">
                            <Badge badgeContent={quantity} color="primary">
                                <BiCart style={{fontSize:25}}/>
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;