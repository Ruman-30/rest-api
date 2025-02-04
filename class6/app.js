const express = require("express");
const cors = require("cors")
const fs = require("fs")
const app = express();
app.use(express.json())
app.use(cors())
app.post("/create", (req, res)=>{
  const {fileName, fileData} = req.body
  const filePath = "./uploads/" + fileName
  fs.writeFile(filePath, fileData, (err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        res.send("file created!")
    }
  })
})
app.get("/read/:fileName", (req, res)=>{
    const fileName = "./uploads/" + req.params.fileName
    fs.readFile(fileName, {encoding: "utf-8"}, (err, data)=>{
        try {
            res.send(data)
        } catch (err) {
            console.log(err);      
        }
    })
})
app.patch("/update/:fileName", (req, res)=>{
    const {fileData} = req.body
    const filePath = "./uploads/" + req.params.fileName
    fs.writeFile(filePath, fileData, (err)=>{
        try {
            res.send("file updated!")
        } catch (err) {
            console.log(err);
        }
    })
})

app.delete("/delete/:fileName", (req, res)=>{
    const filePath = "./uploads/" + req.params.fileName
    fs.unlink(filePath, (err)=>{
        try {
            res.send("file deleted!")
        } catch (err) {
            console.log(err);
            
        }
    })
})
app.get("/get-all", (req, res)=>{
    fs.readdir("./uploads", (err, files)=>{
      if(err){
        console.log(err);
        res.send("error in reading file")
        
      }else{
        res.send(files)
      }
    })
})
app.listen(3000, ()=>{
    console.log("server is running on port 3000");
    
})