import React from 'react';
import styled from "styled-components";
import Chart from "./Chart";
import {PublishedWithChangesOutlined} from "@mui/icons-material";

const Container = styled.div`
  flex: 4;
  
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const Title = styled.h1`
`

const But = styled.button`
  width: 80px;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: lightsteelblue;
  color: black;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`

const ProductTop = styled.div`
  display: flex;
  
`

const ProductBottom = styled.div`
    padding: 20px;
  margin: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const ProductTopLeft = styled.div`
  flex: 1;
`

const ProductTopRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  margin: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const ProductInfoTop = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`
const ProductInfoBottom = styled.div`
    margin-top: 10px;
  width: 60%;
`
const Image = styled.img`
    width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 20px;
`
const ProductName = styled.span`
  font-weight: 600;
`

const ProductInfoItem = styled.div`
    width: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ProductInfoKey = styled.span`
    
`
const ProductInfoValue = styled.span`
  font-weight: 300;
`

const ProductForm = styled.form`
    display: flex;
  justify-content: space-between;
`

const ProductFormLeft = styled.form`
    display: flex;
  flex-direction: column;
`

const Label = styled.label`
    margin-bottom: 10px;
  color: gray;
`
const Input = styled.input`
    margin-bottom: 10px;
  border: none;
  outline: none;
  padding: 10px;
  border-bottom: 1px solid gray;
`

const Select = styled.select`
    margin-bottom: 10px;
`

const Option = styled.option`
    
`

const ProductFormRight = styled.form`
    display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductUpload = styled.div`
    display: flex;
  align-items: center;
`

const ImgUpload = styled.img`
    width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-right: 20px;
`

const BtnUpd = styled.button`
    border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: lightsteelblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`


const ProductInfo = ({product, pStats}) => {
    return (
        <Container>
            <TitleContainer>
                <Title>Product</Title>
                <But>Create</But>
            </TitleContainer>

                <ProductTop>
                    <ProductTopLeft>
                        <Chart userStats={pStats} dataKey="Sales" title="Sales Performance"/>
                    </ProductTopLeft>
                    <ProductTopRight>
                        <ProductInfoTop>
                            <Image src={product.img}/>
                            <ProductName>{product.title}</ProductName>
                        </ProductInfoTop>
                        <ProductInfoBottom>
                            <ProductInfoItem>
                                <ProductInfoKey>id:</ProductInfoKey>
                                <ProductInfoValue>{product._id}</ProductInfoValue>
                            </ProductInfoItem>

                            <ProductInfoItem>
                                <ProductInfoKey>sales:</ProductInfoKey>
                                <ProductInfoValue>5123</ProductInfoValue>
                            </ProductInfoItem>
                            <ProductInfoItem>
                                <ProductInfoKey>in stock:</ProductInfoKey>
                                {product.inStock?
                                    <ProductInfoValue>yes</ProductInfoValue>:
                                    <ProductInfoValue>no</ProductInfoValue>}
                            </ProductInfoItem>
                        </ProductInfoBottom>
                    </ProductTopRight>
                </ProductTop>
                <ProductBottom>
                    <ProductForm>
                        <ProductFormLeft>
                            <Label>Product Name</Label>
                            <Input placeholder={product.title}/>
                            <Label>In Stock</Label>
                            <Select name="inStock" id="inStock">
                                <Option value="true">Yes</Option>
                                <Option value="false">No</Option>
                            </Select>
                            <Label>Description</Label>
                            <Input placeholder={product.desc}/>
                            <Label>Price</Label>
                            <Input placeholder={product.price}/>
                        </ProductFormLeft>
                        <ProductFormRight>
                            <ProductUpload>
                                <ImgUpload src={product.img}/>
                                <Label for="file">
                                    <PublishedWithChangesOutlined style={{cursor: "pointer"}}/>
                                </Label>
                                <Input type="file" id="file" style={{display:"none"}}/>
                            </ProductUpload>
                            <BtnUpd>Update</BtnUpd>
                        </ProductFormRight>
                    </ProductForm>
                </ProductBottom>

        </Container>
    );
};

export default ProductInfo;