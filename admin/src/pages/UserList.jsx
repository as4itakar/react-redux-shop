import React from 'react';
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";

const Container = styled.div`
  
`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const UserList = () => {
    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <UserTable/>
            </MainContainer>
        </Container>
    );
};

export default UserList;