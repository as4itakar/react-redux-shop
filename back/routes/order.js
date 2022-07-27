const route = require('express').Router()
const Order = require('../models/Order')
const {verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin} = require("./verifyToken");

route.post('/', verifyToken, async (req, res)=>{
    const newOrder = new Order(req.body)

    try {
        const savedOrder = newOrder.save()
        res.json(savedOrder)
    }catch (e) {
        res.status(500).json(e)
    }
});

route.put('/:id', verifyTokenAndAdmin, async (req, res)=>{
    try {
        const updateOrder = await Order.findOneAndUpdate(req.params.id,
            {
                $set:req.body,
            },
            {new: true}
        );
        res.json(updateOrder)

    }catch (e) {
        res.status(500).json(e)
    }
})

route.delete('/:id', verifyTokenAndAdmin, async (req, res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.json("Order has been deleted")
    }catch (e) {
        res.status(500).json(e)
    }
})

//GET USER ORDERS
route.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders)
    }catch (e){
        res.status(500).json(e)
    }
})

//GET ALL ORDERS

route.get("/find", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const orders = await Order.find()
        res.json(orders)
    }catch (e) {
        res.status(500).json(e)
    }
})
//GET MONTHLY INCOME
route.get('/income', verifyTokenAndAdmin, async (req, res)=>{
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth },
                    ...(productId && {
                        products: { $elemMatch: { productId } },
                    }),
                },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    }catch (e) {
        res.status(500).json(e)
    }
})
module.exports = route