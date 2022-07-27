import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  flex:4;
`

const Title = styled.h1`
  padding: 20px;
`

const Form = styled.form`
  padding: 20px;
  display: flex;
  
  align-items: center;
  margin-right: 40px;
  flex-wrap: wrap;
  
  border-radius: 10px;
  -webkit-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  -moz-box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
  box-shadow: 10px 8px 25px 6px rgba(34, 60, 80, 0.21);
`

const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px ;
`

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color:gray;
`

const Input = styled.input`
  height: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: gray;
  
`

const NewUserGender = styled.div`
  
`

const Genders = styled.div`
  
`

const InputGender = styled.input`
  margin-top: 15px;
`

const LabelGender = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`

const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`

const Option = styled.option`
  
`

const But = styled.button`
  width: 200px;
  height: 40px;
  border: 2px solid lightgray;
  background-color: lightsteelblue;
  color: gray;
  border-radius: 10px;
  padding: 7px 10px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  transition: .5s ease;
  &:hover{
    border: 2px solid black;
    color: black;
  }
`


const CreateUser = () => {
    return (
        <Container>
            <Title>New User</Title>
            <Form>
                <NewUserItem>
                    <Label>Username</Label>
                    <Input placeholder="type username"/>
                </NewUserItem>
                <NewUserItem>
                    <Label>Full Name</Label>
                    <Input placeholder="type full name"/>
                </NewUserItem>
                <NewUserItem>
                    <Label>Email</Label>
                    <Input type="email" placeholder="type email"/>
                </NewUserItem>
                <NewUserItem>
                    <Label>Password</Label>
                    <Input type="password" placeholder="type password"/>
                </NewUserItem>
                <NewUserItem>
                    <Label>Phone</Label>
                    <Input type="phone" placeholder="type phone"/>
                </NewUserItem>
                <NewUserItem>
                    <Label>Address</Label>
                    <Input type="text" placeholder="type address"/>
                </NewUserItem>
                <NewUserItem>
                    <NewUserGender>
                        <Label>Gender</Label>
                        <Genders>
                            <InputGender type="radio" name="gender" id="male" value="male"/>
                            <LabelGender for="male">Male</LabelGender>
                            <InputGender type="radio" name="gender" id="female" value="female"/>
                            <LabelGender for="female">Female</LabelGender>
                        </Genders>
                    </NewUserGender>
                </NewUserItem>
                <NewUserItem>
                    <Label>Active</Label>
                    <Select name="active" id="active">
                        <Option value="yes">Yes</Option>
                        <Option value="No">No</Option>
                    </Select>
                </NewUserItem>

                    <But>Create</But>
                
            </Form>
        </Container>
    );
};

export default CreateUser;