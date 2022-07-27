import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components"
import FeaturedInfo from "./FeaturedInfo";
import Chart from "./Chart";
import UsersInformation from "./UsersInformation";
import {adminRequest} from "../requestMethods";

const Container = styled.div`
  flex: 4;
`

const RightBar = () => {

    const [userStats, setUserStats] = useState([])

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
        const handleGetStats = async () =>{
            try {
                const res = await adminRequest.get("user/stats")
                res.data.map(item=>{
                    setUserStats(prev=>[
                        ...prev,
                        {name:MONTHS[item._id-1], "Active Users": item.total}
                    ])
                })
            }catch (e) {
                
            }
        }
        handleGetStats()
    }, [MONTHS])

    console.log(userStats)

    return (
        <Container>
            <FeaturedInfo/>
            <Chart userStats={userStats} title="User Analytics" dataKey="Active Users"/>
            <UsersInformation/>
        </Container>
    );
};

export default RightBar;