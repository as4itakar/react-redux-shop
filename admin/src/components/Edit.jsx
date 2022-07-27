import React from 'react';
import styled from "styled-components";
import {FileUploadOutlined} from "@mui/icons-material";

const Container = styled.div`
  flex: 4;
  
`

const Title = styled.h1`
  padding: 20px;
`

const UserBar = styled.div`
  display: flex;
  justify-content: space-between;
`

const InfoBar = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
  margin: 0 20px 0 0;
  flex-direction: column;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
`

const Circle = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 10px;
`

const NameBar = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`

const Status = styled.span`
  color: gray;
`

const Details = styled.span`
  margin-bottom: 20px;
  font-weight: 600;
  color: gray;
`

const Info = styled.span`
  margin-bottom: 20px;
`

const EditBar = styled.div`
  flex: 2;
  padding: 20px;
  margin: 0 40px 0 20px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  
`

const EditTitle = styled.h1`
    
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`

const EditPath = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
    color: gray;
  
`

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid lightgray;
  margin-bottom: 10px;
  width: 400px;
  outline: none;
  color: gray;
  
`

const UploadPath = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
 
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`

const BtnUpd = styled.button`
  padding: 20px;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  background-color: lightsteelblue;
  color: gray;
  border: 2px solid lightgray;
  transition: .5s ease;
  &:hover{
    border: 2px solid black;
    color: black;
  }
`

const MainContainer =styled.div`
  display: flex;
  justify-content: space-between;
`

const UplInput = styled.input`
  
`


const Edit = () => {
    return (
        <Container>
            <Title>Edit User</Title>

                <UserBar>
                    <InfoBar>
                        <MainInfo>
                            <Circle src="https://sun9-29.userapi.com/impf/9wDSiaR2g_oAA_oBUnvvZhA31oXCdqrDGxxJcQ/iw0xspwdTUU.jpg?size=1080x1080&quality=95&sign=ee0fa9ce8245acdf41523e3acaa142db&type=album"/>
                            <NameBar>
                                <Name>Anna Becker</Name>
                                <Status>Sofrware Engineer.</Status>
                            </NameBar>
                        </MainInfo>
                        <Details>Account Details</Details>
                        <Info>annabeck99</Info>
                        <Info>10.12.1999</Info>
                        <Details>Contact Details</Details>
                        <Info>+ 1 123 456 67</Info>
                        <Info>annabeck99@gmail.com</Info>
                        <Info>New York|USA</Info>
                    </InfoBar>
                    <EditBar>
                        <EditTitle>Edit</EditTitle>
                        <MainContainer>
                            <EditPath>
                                <Label>Username</Label>
                                <Input/>
                                <Label>Full Name</Label>
                                <Input/>
                                <Label>Email</Label>
                                <Input/>
                                <Label>Phone</Label>
                                <Input/>
                                <Label>Address</Label>
                                <Input/>
                            </EditPath>
                            <UploadPath>
                                <ImageContainer>
                                    <Image src="https://sun9-29.userapi.com/impf/9wDSiaR2g_oAA_oBUnvvZhA31oXCdqrDGxxJcQ/iw0xspwdTUU.jpg?size=1080x1080&quality=95&sign=ee0fa9ce8245acdf41523e3acaa142db&type=album"/>
                                    <Label htmlFor="file">
                                        <FileUploadOutlined style={{marginLeft:'10px'}}/>
                                    </Label>
                                    <UplInput type="file" id="file" style={{display:"none"}}/>
                                </ImageContainer>
                                <BtnUpd>Update</BtnUpd>
                            </UploadPath>
                        </MainContainer>
                    </EditBar>
                </UserBar>
        </Container>
    );
};

export default Edit;