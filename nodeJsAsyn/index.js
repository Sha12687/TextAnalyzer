const fs=require("fs");
// fs.writeFile("read.txt","today is awsome day . "
// ,(err)=>{
//     console.log("files is created");
// });
// fs.appendFile("read.txt","plz like and aubscribe my channel", (err)=>{
// console.log("text is added");
// });
// fs.readFile("read.txt","utf-8", (err,data)=>{
// console.log(data);
// });
fs.unlink("read.txt",(err)=>{
    console.log("file is deleted");
})