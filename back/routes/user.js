const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const router = require('express').Router()
const cryptojs = require('crypto-js')
const userModel = require('../models/User')

router.put('/:id', verifyTokenAndAuthorization, async (req, res) =>{
    if (req.body.password){
        req.body.password = cryptojs.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString()
    }

    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true})
        res.json(updatedUser)
    } catch (e){
        res.status(500).json(e)
    }
})

router.delete('/delete/:id', verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"User deleted"})
    }catch (e){
        res.status(500).json(e)
    }
})

router.get('/find', verifyTokenAndAdmin, async (req,res)=>{
    const query = req.query.new
    try {
        const users = query ? await userModel.find().sort({_id:-1}).limit(5):await userModel.find()
        res.json(users)
    }catch (e){
        res.status(500).json(e)
    }
})

//GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    
    try{
        const data = await userModel.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.json(data)
    }catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router