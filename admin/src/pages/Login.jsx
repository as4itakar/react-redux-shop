import React, {useState} from 'react';
import styled from "styled-components";
import {login} from "../redux/appiCalls";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://vsthemes.org/uploads/posts/2020-01/1580462440_vsthemes_ru-56.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 1rem;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 20px 10px 0 0 ;
  padding: 10px;
`

const Link = styled.a`
  font-size: 20px;
  margin: 20px 0;
  
`

const But = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px auto;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`

const Error = styled.span`
  color: red;
  font-size: 18px;
  margin: 15px 0;
`

const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const {isFetching, error} = useSelector(state => state.user)

    const handleLogin = (e) =>{
        e.preventDefault()
        login(dispatch, {username, password})
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Type your email" onChange={(e)=>setUserName(e.target.value)}/>
                    <Input placeholder="Type your password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <But onClick={handleLogin} disabled={isFetching}>LOGIN</But>
                    {error?<Error>Something went wrong...</Error>: null}
                    <Link>
                        DO NOT REMEMBER THE PASSWORD?
                    </Link>
                    <Link to="/register">
                        CREATE A NEW ACCOUNT
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;