import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import CreateProduct from "../components/CreateProduct";

const Container = styled.div`
  
`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const NewProduct = () => {
    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <CreateProduct/>
            </MainContainer>
        </Container>
    );
};

export default NewProduct;