const route = require('express').Router()
const Cart = require('../models/Cart')
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");

//CREATE
route.post('/', verifyToken, async (req, res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = newCart.save()
        res.json(savedCart)
    }catch (e){
        res.status(500).json(e)
    }
})

//UPDATE
route.put('/:id', verifyTokenAndAuthorization, async (req,res)=>{
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new: true}
        );
        res.json(updateCart)
    }catch (e) {
        res.status(500).json(e)
    }
})

//DELETE
route.delete('/:id', verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.json("Element of a cart has been deleted...")
    }catch (e) {
        res.status(500).json(e)
    }
})

//GET USER CART
route.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        res.json(cart)
    }catch (e) {
        res.status(500).json(e)
    }
})

//GET ALL
route.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const carts = await Cart.find()
        res.json(carts)
    }catch (e) {
        res.status(500).json(e)
    }
})
module.exports = route