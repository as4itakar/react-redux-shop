import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {ArrowDownward} from "@mui/icons-material";
import {ArrowUpward} from "@mui/icons-material";
import {adminRequest} from "../requestMethods";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ItemContainer = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  transition: 1s ease;
  &:hover{
    transform: translateY(-5px) translateX(-5px);
    -webkit-box-shadow: 16px 14px 22px 9px rgba(34, 60, 80, 0.22);
    -moz-box-shadow: 16px 14px 22px 9px rgba(34, 60, 80, 0.22);
    box-shadow: 16px 14px 22px 9px rgba(34, 60, 80, 0.22);
    
  }
`


const Title = styled.span`
  font-size: 20px;
`

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`

const MoneyRate = styled.span`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 300;
`

const Sub = styled.span`
  color: gray;
  font-size: 15px;
`

const FeaturedInfo = () => {
    const [income, setIncome] =useState([])
    const [perc, setPerc] =useState(0)

    useEffect(()=>{
        const handleGetIncome = async () =>{
            try {
                const res = await adminRequest.get("carts/income")
                setIncome(res.data)
                console.log(income)
            }catch {}
        }
        handleGetIncome()
    }, [])

    return (
        <Container>
            <ItemContainer>
                <Title>Revanue</Title>
                <FeaturedMoneyContainer>
                    <Money> $</Money>
                    <MoneyRate>-</MoneyRate>
                    <ArrowDownward style={{color: "red"}}/>
                </FeaturedMoneyContainer>
                <Sub>Compared to last month</Sub>
            </ItemContainer>
            <ItemContainer>
                <Title>Sales</Title>
                <FeaturedMoneyContainer>
                    <Money>1,415 $</Money>
                    <MoneyRate>-1.4</MoneyRate>
                    <ArrowDownward style={{color: "red"}}/>
                </FeaturedMoneyContainer>
                <Sub>Compared to last month</Sub>
            </ItemContainer>
            <ItemContainer>
                <Title>Cost</Title>
                <FeaturedMoneyContainer>
                    <Money>2,225 $</Money>
                    <MoneyRate>+2.4</MoneyRate>
                    <ArrowUpward style={{color: "green"}}/>
                </FeaturedMoneyContainer>
                <Sub>Compared to last month</Sub>
            </ItemContainer>
        </Container>
    );
};

export default FeaturedInfo;