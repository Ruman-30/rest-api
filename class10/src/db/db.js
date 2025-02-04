const mongoose = require("mongoose");

async function connect (){
   await mongoose.connect("mongodb://localhost:27017/exc-2")
    .then(()=>{
        console.log("db connected");
        
    })
    .catch((err)=>{
    console.log(err);
    
    })
}

module.exports = connect