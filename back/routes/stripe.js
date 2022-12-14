const route = require('express').Router
const stripe = require('stripe')(process.env.STRIPE_KEY)

route.post("/payment", (req, res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency: "usd"
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else if (stripeRes){
            res.status(200).json(stripeRes)
        }
    })
})
module.exports = route;