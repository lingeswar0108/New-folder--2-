// const mongoose = require('mongoose')
const express = require('express')

app = express()

// mongoose.connect('mongodb://localhost:27017/newdb').then(()=>{
//     console.log("Db is Connected")
// })
// console.log("Hello")

// const UserSchema = new mongoose.Schema({
//     name:String
// })
// const UserModel = mongoose.model("newcol",UserSchema)

app.get("/",(req,res)=>{
    res.write("HELLO")
})
app.listen(5000) 