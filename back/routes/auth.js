const route = require('express').Router()
const cryptojs = require('crypto-js')
const userModel = require("../models/User");
const jwt = require('jsonwebtoken')

//REGISTER
route.post('/regis', async (req, res)=>{
    try {
        const user = new userModel({
            username:req.body.username,
            email: req.body.email,
            password: cryptojs.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString(),
        })
        const savedUser = await user.save()
        res.json(savedUser)
    }catch (e){
        console.log(e)
        res.status(500).json({message:"Registration error"})
    }
})

//LOGIN
route.post('/log', async (req, res)=>{
    try{
        const {username} = req.body
        const user = await userModel.findOne({username})
        if (!user){
            res.status(401).json({message:"Wrong login"})
        }
        const decryptPass = cryptojs.AES.decrypt(user.password, process.env.SECRET_PASSWORD).toString(cryptojs.enc.Utf8)
        if (decryptPass!==req.body.password){
            res.status(401).json({message:"Wrong password"})
        }

        const accessToken = jwt.sign({
            id:user.id,
            isAdmin: user.isAdmin
        }, process.env.SECRET_JWT,{expiresIn: "2d"})

        const {password, ...others} =user._doc
        res.json(accessToken)
    }catch (err){
        console.log(err)
        res.status(500).json({message: "Login error"})
    }
})


module.exports = route