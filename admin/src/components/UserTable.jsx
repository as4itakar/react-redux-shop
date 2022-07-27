import React from 'react';
import styled from "styled-components";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from "@mui/icons-material";

const Container = styled.div`
  padding: 20px;
  flex: 4;
`

const Grid = styled.div`
  height: 65vh;
  width: 100%;
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



const UserTable = () => {
    const rows = [
        {
            id: 1,
            userName: 'John Snow',
            avatar: 'https://sun9-29.userapi.com/impf/9wDSiaR2g_oAA_oBUnvvZhA31oXCdqrDGxxJcQ/iw0xspwdTUU.jpg?size=1080x1080&quality=95&sign=ee0fa9ce8245acdf41523e3acaa142db&type=album',
            email: "jon@gnail.com",
            status: "active",
            transactions: "$120.00"
        },
        {
            id: 2,
            userName: 'John Snow',
            avatar: 'https://sun9-29.userapi.com/impf/9wDSiaR2g_oAA_oBUnvvZhA31oXCdqrDGxxJcQ/iw0xspwdTUU.jpg?size=1080x1080&quality=95&sign=ee0fa9ce8245acdf41523e3acaa142db&type=album',
            email: "jon@gnail.com",
            status: "active",
            transactions: "$120.00"
        },
        {
            id: 3,
            userName: 'John Snow',
            avatar: 'https://sun9-29.userapi.com/impf/9wDSiaR2g_oAA_oBUnvvZhA31oXCdqrDGxxJcQ/iw0xspwdTUU.jpg?size=1080x1080&quality=95&sign=ee0fa9ce8245acdf41523e3acaa142db&type=album',
            email: "jon@gnail.com",
            status: "active",
            transactions: "$120.00"
        },
        {
            id: 4,
            userName: 'John Snow',
            avatar: 'https://sun9-29.userapi.com/impf/9wDSiaR2g_oAA_oBUnvvZhA31oXCdqrDGxxJcQ/iw0xspwdTUU.jpg?size=1080x1080&quality=95&sign=ee0fa9ce8245acdf41523e3acaa142db&type=album',
            email: "jon@gnail.com",
            status: "active",
            transactions: "$120.00"
        },

    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'Username', width: 350, renderCell: (params)=>{
        return(
            <ImgContainer>
                <Image src={params.row.avatar}/>
                {params.row.userName}
            </ImgContainer>
        )
    }},
        { field: 'email', headerName: 'Email', width: 350 },
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'transactions', headerName: 'Transactions', width: 200 },
        {field: 'action', headerName: 'Action', width: 130, renderCell: (params)=>{
        return(
            <ButContainer>
                <But color="green">Edit</But>
                <DeleteOutlineOutlined style={{color: "red", cursor:"pointer"}}/>
            </ButContainer>
        )
    }}
    ];

    return (
        <Container>
            <Grid>
                <DataGrid disableSelectionOnClick rows={rows} columns={columns} pageSize={8} checkboxSelection style={{padding:"20px"}}/>
            </Grid>
        </Container>
    );
};

export default UserTable;