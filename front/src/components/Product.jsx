import React from 'react';
import styled from "styled-components";
import {BiCart} from "react-icons/all";
import {GoSearch} from "react-icons/all";
import {BiHeart} from "react-icons/all";
import {Link} from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover ${Info}{
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition:all 0.5s ease;
  font-size: 20px;
  cursor: pointer;
  
  &:hover{
    background-color: #e9f5f5;
    transform:scale(1.1);
  }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <BiCart/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <GoSearch/>
                    </Link>
                </Icon>
                <Icon>
                    <BiHeart/>
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;