express = require("express");
const path = require("path")
const app=express();

const PORT = process.env.PORT || 8001;

app.get("/",(req,res)=>{
    res.send("This is a HomePage ")
})

app.listen(PORT, ()=> console.log(`Server is Running on Port ${PORT}`))