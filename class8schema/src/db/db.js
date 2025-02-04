const mongoose = require("mongoose")

async function connect(){
   await mongoose.connect("mongodb://localhost:27017/n21")
   .then(()=>{
    console.log("DB Connected");
    
   }).catch((err)=>{
console.log(err);

   })
}

module.exports = connect