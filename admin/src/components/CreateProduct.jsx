import React, {useState} from 'react';
import styled from "styled-components"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import {useDispatch} from "react-redux";
import {addProductOne, deleteAnything} from "../redux/appiCalls";


const Container = styled.div`
  flex: 4;
  padding: 20px;
`

const Title = styled.h1`
  margin: 20px 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
`

const Label = styled.label`
  margin: 20px 0;
  font-size: 20px;
  color: gray;
`

const Input = styled.input`
  padding: 10px;
  width: 250px;
  border: none;
  outline: none;
  border-bottom: 2px solid lightgray;
  font-size: 15px;
  color: black;
  
`

const InputFile = styled.input`
  width: 250px;
  
  
`

const Select = styled.select`
  padding: 10px;
  width: 100px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid lightgray;
  color: black;
  cursor: pointer;
  border-radius: 10px;
`

const Option = styled.option`
  
`

const But = styled.button`
  padding: 10px;
  width: 80px;
  border-radius: 10px;
  border: none;
  background-color: lightsteelblue;
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin: 20px 0;
  cursor: pointer;
  
`

const LabelFile = styled.label`
  
`

const ButFile = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: none;
  background-color: lightsteelblue;
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin: 20px 0;
  cursor: pointer;
`

const ButContainer = styled.div`
  display: flex;
  align-items: center;
`

const FileName = styled.div`
  margin: 0 20px;
  font-size: 15px;
  font-weight: bold;
  color: gray;
`



const CreateProduct = () => {
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState([])
    const [size, setSize] = useState([])
    const [color, setColor] = useState([])

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setInputs(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const handleCat = (e) =>{
        setCat(e.target.value.split(","))
    }

    const handleSize = (e) =>{
        setSize(e.target.value.split(","))
    }

    const handleColor = (e) =>{
        setColor(e.target.value.split(","))
    }

    const handleClick = (e) =>{
        e.preventDefault()
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    const product = {...inputs, img: downloadURL, categories: cat, size: size, color: color}
                    addProductOne(product, dispatch)
                });
            }
        );
    }


    return (
        <Container>
            <Title>Create Product</Title>
            <Form>
                <Label>Image</Label>
                <LabelFile for="file">
                    <ButContainer>
                        <ButFile>Choose File</ButFile>
                        {file!=null?<FileName>{file.name}</FileName>:null}
                    </ButContainer>
                </LabelFile>
                <InputFile id="file" type="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                <Label>Title</Label>
                <Input name="title" type="text" placeholder="type title..." onChange={handleChange}/>
                <Label>Description</Label>
                <Input name="desc" type="text" placeholder="type description..." onChange={handleChange}/>
                <Label>Price</Label>
                <Input name="price" type="number" placeholder="type price..." onChange={handleChange}/>
                <Label>Categories</Label>
                <Input type="text" placeholder="type categories..." onChange={handleCat}/>
                <Label>Size</Label>
                <Input type="text" placeholder="type size..." onChange={handleSize}/>
                <Label>Color</Label>
                <Input type="text" placeholder="type color..." onChange={handleColor}/>
                <Label>Stock</Label>
                <Select>
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                </Select>
                <But onClick={handleClick}>Create</But>
            </Form>
        </Container>
    );
};

export default CreateProduct;