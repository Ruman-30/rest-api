const fs = require("fs");

// fs.writeFileSync("./test.txt", "hey there how you doing")
// fs.writeFile("./test2.txt", "hello there what you doing", (err)=>{

// })

// const result = fs.readFileSync("./test2.txt","utf-8")
// console.log(result);

// fs.readFile("./test2.txt", "utf-8", (err, result)=>{
//   if(err){
//     console.log("err", err); 
//   }else{
//     console.log(result);
//   }
// })

// fs.appendFileSync("./test2.txt", "hello world\n")
fs.copyFileSync("./test2.txt", "copy.txt")
fs.unlinkSync("./copy.txt")
console.log(fs.statSync("./test2.txt").isFile())