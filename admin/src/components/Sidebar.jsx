import React, {useState} from 'react';
import styled from "styled-components"
import {LineStyleRounded} from "@mui/icons-material";
import {TimelineRounded} from "@mui/icons-material";
import {TrendingUpRounded} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: rgb(251,251,255);
  position: sticky;
  top: 55px;
  height: 10vh;
  transition: 1s ease;
  
`

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`

const Menu = styled.div`
    margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 15px;
  color: rgb(187,186,186);
`

const List = styled.ul`
  list-style: none;
  padding: 5px;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 10px;
  background-color: ${props => (props.color)};
  
  
  
  
`

const Sidebar = () => {


    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <ListItem >
                            <LineStyleRounded style={{marginRight: "5px", fontSize: "20px"}}/> Home
                        </ListItem>
                        <ListItem>
                            <TimelineRounded style={{marginRight: "5px", fontSize: "20px"}}/> Analytics
                        </ListItem>
                        <ListItem>
                            <TrendingUpRounded style={{marginRight: "5px", fontSize: "20px"}}/> Sales
                        </ListItem>
                    </List>

                </Menu>
                <Menu>
                    <Title>Quick Menu</Title>
                    <List>
                        <ListItem>
                            <LineStyleRounded style={{marginRight: "5px", fontSize: "20px"}}/> Users
                        </ListItem>
                        <Link to="/products" style={{textDecoration:"none", color:"gray"}}>
                            <ListItem>
                                <TimelineRounded style={{marginRight: "5px", fontSize: "20px"}}/> Products
                            </ListItem>
                        </Link>
                        <ListItem>
                            <TrendingUpRounded style={{marginRight: "5px", fontSize: "20px"}}/> Transactions
                        </ListItem>
                        <ListItem>
                            <TrendingUpRounded style={{marginRight: "5px", fontSize: "20px"}}/> Reports
                        </ListItem>
                    </List>

                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <List>
                        <ListItem>
                            <LineStyleRounded style={{marginRight: "5px", fontSize: "20px"}}/> Mail
                        </ListItem>
                        <ListItem>
                            <TimelineRounded style={{marginRight: "5px", fontSize: "20px"}}/> Feedback
                        </ListItem>
                        <ListItem>
                            <TrendingUpRounded style={{marginRight: "5px", fontSize: "20px"}}/> Messages
                        </ListItem>
                    </List>

                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <ListItem>
                            <LineStyleRounded style={{marginRight: "5px", fontSize: "20px"}}/> Menage
                        </ListItem>
                        <ListItem>
                            <TimelineRounded style={{marginRight: "5px", fontSize: "20px"}}/> Analytics
                        </ListItem>
                        <ListItem>
                            <TrendingUpRounded style={{marginRight: "5px", fontSize: "20px"}}/> Reports
                        </ListItem>
                    </List>

                </Menu>
            </Wrapper>
        </Container>
    );
};

export default Sidebar;