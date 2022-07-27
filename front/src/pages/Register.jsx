import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://vsthemes.org/uploads/posts/2020-01/1580462440_vsthemes_ru-56.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0 ;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const But = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 0 auto;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Type your name"/>
                    <Input placeholder="Type your surname"/>
                    <Input placeholder="Type your email"/>
                    <Input placeholder="Type your username"/>
                    <Input placeholder="Type your password"/>
                    <Input placeholder="Confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data
                        in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <But>CREATE</But>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;