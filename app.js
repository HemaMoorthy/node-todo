const express =require('express')
const mongoose = require('mongoose')

const app = express()//starting express 


const url = 'mongodb://localhost/home'
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection


con.on('open',()=>{
console.log("Connected.......");
})

app.use(express.json)
const home = require('../node-todo/routes/home')
app.use('/home',home)

app.listen(4444, ()=>{
    console.log("Server started at http://127.0.0.1:4444");
})