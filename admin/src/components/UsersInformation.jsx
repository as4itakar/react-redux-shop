import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {RemoveRedEye} from "@mui/icons-material";
import {loadUsers} from "../redux/appiCalls";
import {useDispatch, useSelector} from "react-redux";
import {adminRequest} from "../requestMethods";

const Container = styled.div`
  display: flex;
  width: 100%;
`

const NewMembers = styled.div`
  flex:1;
  margin: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const LatestTransactions = styled.div`
  flex: 3;
  margin: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const Title = styled.h1`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`

const Circle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
  
  
`

const UserInit = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`

const UserTitle = styled.span`
  font-weight: 600;
  margin-bottom: 5px;
`

const UserSpan = styled.span`
  color: gray;
`

const DisplayBut = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: lightsteelblue;
  color: gray;
  font-weight: 600;
  display: flex;
  align-items: center;
`

const UserTable = styled.div`
 
`

const TitleRow = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TableTitle = styled.h1`
  font-size: 20px;
  flex: 1;

`

const UserRow = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TableInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const UserName = styled.span`
  font-weight: 600;
`

const TableDate = styled.span`
  flex: 1;

  color: gray;
`

const TableAmount = styled.span`
  flex: 1;
  color: gray;
`

const TableStatus = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(80,200,120,.5);
  color: rgb(80,200,120);
  
`


const UsersInformation = () => {
    const [users, setUsers] = useState([])
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        const handleGetUsers = async () =>{
            try{
                const res = await adminRequest.get("user/find/?new=true")
                setUsers(res.data)
            }catch (e) {

            }
        }
        handleGetUsers()
    })

    useEffect(()=>{
        const handleGetOrders = async ()=>{
            try {
                const res = await adminRequest.get("orders/find")
                setOrders(res.data)
            }catch (e){

            }
        }
    })
    return (
        <Container>
            <NewMembers>
                <Title>New Users Members</Title>
                {users?.map(user=>(
                    <UserInfo>
                        <Circle src={user.img? user.img: "https://images.squarespace-cdn.com/content/5b2d342cb40b9d0d2fbe1773/1533056919420-YE4M8CYUESQK3XU4RO1A/YAH+MP.png?format=1000w&content-type=image%2Fpng"}/>
                        <UserInit>
                            <UserTitle>{user.username}</UserTitle>
                        </UserInit>
                        <DisplayBut><RemoveRedEye style={{marginRight:"5px"}}/> Display</DisplayBut>
                    </UserInfo>
                ))}

            </NewMembers>
            <LatestTransactions>
                <Title>Latest Transactions</Title>
                <UserTable>
                    <TitleRow>
                        <TableTitle>Customer</TableTitle>
                        <TableTitle>Date</TableTitle>
                        <TableTitle>Amount</TableTitle>
                        <TableTitle>Status</TableTitle>
                    </TitleRow>
                    {orders.map(order=>(
                        <UserRow>
                            <TableInfo>
                                <Circle src="https://sun9-34.userapi.com/impf/boC6HZ4w_xVhR--oUAw4Uwfz0AVwaZZAxRJtdg/ArsQEWkmlqU.jpg?size=747x733&quality=96&sign=bae44291827e18e02f428123b2530cd6&type=album" style={{marginRight:"10px"}}/>
                                <UserName>Susan Carol</UserName>
                            </TableInfo>
                            <TableDate>2 Jun 2021</TableDate>
                            <TableAmount>122.00 $</TableAmount>
                            <TableStatus color="green">Approved.</TableStatus>
                        </UserRow>
                    ))}

                </UserTable>
            </LatestTransactions>
        </Container>
    );
};

export default UsersInformation;