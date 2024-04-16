const express=require('express')

const app=express();
app.use('/',(req,res,next)=>{
    console.log("path"+req.path+"method"+req.method);
    next();
})
app.get('/',(req,res)=>{
    console.log("api running");

})


app.listen(5000,console.log("Server is running"))