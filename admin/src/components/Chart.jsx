import React from 'react';
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Container = styled.div`
  margin: 30px 20px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const Chart = ({userStats, dataKey, title}) => {

    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={userStats}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default Chart;