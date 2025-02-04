const mongoose = require("mongoose")

async function connect(){
 await mongoose.connect("mongodb://localhost:27017/n21")
  .then(()=>{
    console.log("db connected");
    
  })
} 

module.exports = connect