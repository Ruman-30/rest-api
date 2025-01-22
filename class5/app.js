const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())
app.get("/", (req, res)=>{
  res.send("hello world!")
})

app.post("/create", (req, res)=>{
   const {fileName, fileData} = req.body
   const filePath = "./uploads/" + fileName
     fs.writeFile(filePath, fileData, (err)=>{
       if(err){
        console.log(err);
       }
       res.send("hello duniya!")
})
})

app.get("/read/:fileName", (req, res)=>{
  const filePath = "./uploads/" + req.params.fileName
  fs.readFile(filePath, {encoding: "utf-8"}, (err, data)=>{
     if(err){
      console.log(err);
     }
     else{
      res.send(data)
     }
  })
})
app.listen(3000, ()=>{
  console.log("server is running on port 3000");
  
})