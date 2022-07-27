import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Edit from "../components/Edit";
import styled from "styled-components";

const Container = styled.div`

`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const User = () => {
    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <Edit/>
            </MainContainer>
        </Container>
    );
};

export default User;