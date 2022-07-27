import React from 'react';
import {BiSend} from "react-icons/all";
import styled from "styled-components"

const Container = styled.div`
    height: 40vh;
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`
const InpContainer = styled.div`
    width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 20px;
    padding-left: 20px;
`
const But = styled.button`
    flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  
`
const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Desc>
                Get timely updates from your favourite products.
            </Desc>
            <InpContainer>
                <Input placeholder="Your email"/>
                <But>
                    <BiSend style={{fontSize:30}}/>
                </But>
            </InpContainer>
        </Container>
    );
};

export default Newsletter;