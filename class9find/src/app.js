const express = require("express")
const userModel = require("./model/user.model")
const app = express()

app.use(express.json())
app.post("/create", async (req, res)=>{
    const {username, email, password} = req.body

   const users = await userModel.create({
        username,
        email,
        password
    })
    res.send(users)
})

app.get("/get-user", async (req, res)=>{
    const user = await userModel.find({
       $or: [
        {username: "ruman_30"},
        {email: "shadab99@gmail.com"}
       ]
    })
    res.send(user)
    console.log(user);
    
})

app.patch("/update-user", async (req, res)=>{
  const user = await userModel.findOneAndUpdate(
    {username: "new_username"},
    {username: "ruman_30"}
)
res.send(user)
})

app.delete("/delete-user", async (req, res)=>{
    const user = await userModel.findOneAndDelete({
        username: "elizah06"
    })
    res.send(user)
})
module.exports = app