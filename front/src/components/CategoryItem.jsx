import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const Container = styled.div`
  flex: 1;
  padding: 0 10px;
  height: 70vh;
  position: relative;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover{
    transform:translateY(-5px);
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 10px;
`

const But = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-weight: 500;
  font-size: 30px;
  
  
`



const CategoryItem = ({item}) => {
    return (
            <Container>
                <Link to={`/products/${item.cat}`}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <But>SHOP NOW</But>
                </Info>
                </Link>
            </Container>
    );
};

export default CategoryItem;