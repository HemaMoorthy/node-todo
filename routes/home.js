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

router.get('/:id',async(req,res)=>{
    try{
        const home = await Home.findById(req.params.id)
        res.json(home)
    }
    catch(err){
        res.send("Error" + err)
    }
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

router.patch('/',async(req,res)=>{
    try{
        const home = await Home.findById(req.params.id)
        home.name = req.body.name
        const h1 = await home.save()
        res.json(h1)
    }
    catch(err){
        res.send("Error"+err)
    }
}
)

module.exports=router