import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreateUser from "../components/CreateUser";
import styled from "styled-components";
import ProductTable from "../components/ProductTable";

const Container = styled.div`
  
`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const ProductLIst = () => {
    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <ProductTable/>
            </MainContainer>
        </Container>
    );
};

export default ProductLIst;