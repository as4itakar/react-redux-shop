const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')
const cartRouter = require('./routes/cart')


const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000||process.env.PORT
DB_URL = process.env.MONGO_URL

app.use('/api/user', cors(), userRouter)
app.use('/api/auth', cors(), authRouter)
app.use('/api/products', cors(), productRouter)
app.use('/api/orders', cors(), cartRouter)
app.use('/api/carts', cors(), orderRouter)


mongoose.connect(DB_URL)
    .then(()=>console.log('Mongo connected'))
    .catch((err)=>{
        console.log(err)
    })

app.listen(PORT, ()=>{
    console.log("Server is working on PORT " + PORT)
})