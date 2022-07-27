import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {BiPlus} from "react-icons/all";
import {BiMinus} from "react-icons/all";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {publicRequest} from "../requestMethods";
import {useDispatch} from "react-redux";
import {addProduct} from "../redux/cartRedux";

const Container = styled.div`
  
`
const Wrapper = styled.div`
  display: flex;
  margin: 35px;
`

const ImgContainer = styled.div`
  flex: 1;
  
`

const Img = styled.img`
  width: 80%;
  height: 90%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`

const Desc = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`

const Price = styled.div`
  font-size: 45px;
  margin-bottom: 20px;
`

const ColorContainer = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const Color = styled.span`
  font-size: 25px;
`

const Circle = styled.div`
  padding: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props=>(props.color)};
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid black;
`



const Size = styled.span`
  font-size: 25px;
  margin-left: 100px;
`

const Select = styled.select`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
`

const Option = styled.option`
  
`

const AddContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`

const CalcContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const But = styled.div`
  cursor: pointer;
`

const Inp = styled.input`
  width: 25px;
  height: 25px;
  margin: 0 5px;
  background-color: white;
  border: 2px solid teal;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 17px;
`

const Butt = styled.button`
  width: 150px;
  padding: 20px;
  
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: bold;
  border: solid teal;
  cursor: pointer;
  
`


const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const dispatch = useDispatch()

    useEffect(()=>{
        const getProduct = async () =>{
            try{
                console.log(id)
                const res = await publicRequest.get('/products/find/'+id)
                setProduct(res.data)
            }catch (e) {

            }
        }
        getProduct()
    },[id])

    const handleQuantity = (prop) =>{
        if (prop === "dec"){
            if(quantity>1) {
                setQuantity(quantity - 1)
            }
        }
        else {
            setQuantity(quantity+1)
        }
    }

    const handleSubmit = () =>{
        dispatch(addProduct({...product, quantity, color, size}))

    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>{product.price}$</Price>
                        <ColorContainer>
                            <Color>Color:</Color>
                            {product.color?.map(c=>(
                                <Circle color={c} onClick={()=>setColor(c)}/>
                            ))}

                            <Size>Size:</Size>
                            <Select onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map(s=>(
                                    <Option>{s}</Option>
                                ))}
                            </Select>
                        </ColorContainer>
                    <AddContainer>
                        <CalcContainer>
                            <But onClick={()=>handleQuantity("dec")}><BiMinus/></But>
                            <Inp value={quantity}/>
                            <But onClick={()=>handleQuantity("inc")}><BiPlus/></But>
                        </CalcContainer>
                        <Butt onClick={handleSubmit}>BUY NOW</Butt>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;