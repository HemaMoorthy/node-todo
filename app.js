const express =require('express')
const app = express()


app.use('/', (req, res)=>{
    res.json({
        name:"hema"
    })
})


app.listen(4444, ()=>{
    console.log("Server started at http://127.0.0.1:4444");
})