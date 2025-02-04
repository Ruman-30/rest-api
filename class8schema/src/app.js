const express = require("express");
const userModel = require("./models/user.model")
const app = express()
app.use(express.json())

app.post("/create", async (req, res)=>{
   const {username, email, password} = req.body
   const user = await userModel.create({
    username,
    email,
    password,
   })
   console.log(user);
   res.send(user)
})

app.get("/get-user", async (req, res)=>{
    const users = await userModel.find({
        username: "exam_username"
    })
    res.send(users)
    console.log(users);
    
})

module.exports = app