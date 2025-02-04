const express = require("express")
const connect = require("./db/db")
const userModel = require("./models/user.model")
const app = express()

connect()
app.use(express.json())
app.get("/", (req, res)=>{
    res.send("hello world!")
})

app.post("/create", async (req, res)=>{
    const {username, email, password} = req.body
    const user = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(user)
    console.log(user);
    
})
module.exports = app