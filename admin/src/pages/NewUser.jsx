import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import styled from "styled-components";
import CreateUser from "../components/CreateUser";

const Container = styled.div`
  
`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const NewUser = () => {
    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <CreateUser/>
            </MainContainer>
        </Container>
    );
};

export default NewUser;