const express = require('express');
const app = express();
const cors=require('cors');
const mongoose = require('mongoose');
const BuyerModel=require('./models/BuyerModel')
app.use(express.json())
app.use(cors())
mongoose
  .connect("mongodb://127.0.0.1:27017/Country_Cart").then=()=>{
    console.log("DB is connected");
  }
app.post('/register',(req,res)=>{
  BuyerModel.create(req.body).then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post('/login',(req,res)=>{
  const {email,password}=req.body;
  BuyerModel.findOne({email:email}).then(
    user=>{
      if(user){
        if(user.password==password)
        {
          res.json("success")
        }
        else{
          res.json("The password is incorrect")
        }
      }else{
        res.json("No record exist")
      }
    }
  )
})
app.listen(3000,()=>{
  console.log("Server is running");
})

