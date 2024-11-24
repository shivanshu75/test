const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("Shivanshu")
})

app.listen(3000,()=>{
    console.log("new laptop")
})