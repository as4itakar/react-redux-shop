import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutlineOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getProduct} from "../redux/appiCalls";
import {Link} from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  flex: 4;
`

const Grid = styled.div`
  height: 65vh;
  width: auto;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const But = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  border: none;
  background-color: ${props => (props.color)};
  color: white;
  margin-right: 10px;
`

const ButContainer = styled.div`
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 10px;
`

const TitleContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  color: black;
`

const CreateBut = styled.button`
  width: 100px;
  padding: 10px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: lightsteelblue;
`

const ProductTable = () => {

    const dispatch = useDispatch()

    const products = useSelector((state)=>state.product.product)

    useEffect(()=>{
        getProduct(dispatch)

    }, [dispatch])

    const handleDeleteProducts = async (id) =>{
        deleteProduct(id, dispatch)
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'productName', headerName: 'Product', width: 350, renderCell: (params)=>{
                return(
                    <ImgContainer>
                        <Image src={params.row.img}/>
                        {params.row.title}
                    </ImgContainer>
                )
            }},
        { field: 'inStock', headerName: 'Stock', width: 350 },
        { field: 'price', headerName: 'Price', width: 200 },
        {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
                return(
                    <ButContainer>
                        <Link style={{textDecoration:"none"}} to={`/product/${params.row._id}`}>
                            <But color="green">Edit</But>
                        </Link>
                        <DeleteOutlineOutlined style={{color: "red", cursor:"pointer"}} onClick={()=>handleDeleteProducts(params.row._id)}/>
                    </ButContainer>
                )
            }}
    ];

    return (
        <Container>
            <TitleContainer>
                <Title>All Products</Title>
                <Link to="createProduct" style={{textDecoration:"none"}}>
                    <CreateBut>Create</CreateBut>
                </Link>
            </TitleContainer>
            <Grid>
                <DataGrid disableSelectionOnClick rows={products} columns={columns} getRowId={(row)=>row._id} pageSize={8} checkboxSelection style={{padding:"20px"}}/>
            </Grid>
        </Container>
    );
};

export default ProductTable;