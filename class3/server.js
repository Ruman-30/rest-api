const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    console.log(req.body);

   res.send("hello world!")
})
app.get("/about", (req, res)=>{
   res.send("hello duniya!")
})
app.get("*", (req, res)=>{
  res.send("404 Page Not Found")
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
    
})