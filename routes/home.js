const express = require('express')
const router = express.Router()

const Home = require('../models/homeschema')


router.get('/',async(req,res)=>{
    try{
        const home = await Home.find()
        res.json(home)
    }
    catch(err){

        res.send('Error' + err)
    }
    res.send("Get the request")
})

router.post('/',async(req,res)=>{
    const home = new Home({
        name:req.body.name,
        rollno:req.body.rollno,
        dept:req.body.dept

    })
    try{
        const h1=await home.save()
        res.json(h1)
    }
    catch(err){
        console.log("Errror" + err)
    }
})


module.exports=router