import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import styled from "styled-components"

const Container = styled.div`
  
`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const Main = () => {
    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <RightBar/>
            </MainContainer>
        </Container>
    );
};

export default Main;