import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import ProductInfo from "../components/ProductInfo";
import {useLocation} from "react-router-dom";
import { useSelector} from "react-redux";
import {adminRequest} from "../requestMethods";


const Container = styled.div`
  
`

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const product = useSelector((state)=>state.product.product.find(product=>product._id===id))
    const [pStats, setPStats] = useState([])

    const MONTHS = useMemo(
        ()=>[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    )

    useEffect(()=>{
        const getStats = async () =>{
            try{
                const res = await adminRequest.get("carts/income?pid="+id)
                res.data.map((item)=>
                setPStats((prev)=>[
                    ...prev,
                    {name: MONTHS[item._id - 1], Sales:item.total}
                ]))
            }catch {}
        }
        getStats()
    })
    console.log(pStats)


    return (
        <Container>
            <Navbar/>
            <MainContainer>
                <Sidebar/>
                <ProductInfo product={product} pStats={pStats}/>
            </MainContainer>
        </Container>
    );
};

export default Product;