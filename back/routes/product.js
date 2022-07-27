const route = require('express').Router()
const Product = require('../models/Product')
const {verifyTokenAndAdmin} = require("./verifyToken");

//CREATE
route.post("/", verifyTokenAndAdmin, async (req, res)=>{
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.json(savedProduct)
    }catch (e){
        res.status(500).json(e)
    }
})

//UPDATE
route.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new:true}
        );
        res.json(updatedProduct)
    }catch (e){
        res.status(500).json(e)
    }
})

//DELETE
route.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    }catch (e){
        res.status(500).json(e)
    }
})

//GET PRODUCT
route.get("/find/:id", async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    }catch (e) {
        res.status(500).json(e)
    }
})

//GET ALL PRODUCTS
route.get("/find", async (req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;

        if (qNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        }else if (qCategory) {
            products = await Product.find({category:{
                    $in: [qCategory],
                },
            });
        }else{
            products = await Product.find()
        }
        res.json(products)
    }catch (e) {
        
    }
})


module.exports = route