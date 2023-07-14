const fs= require("fs");
fs.writeFileSync("read.txt","Welcome i am try to start new way of life.");
fs.appendFileSync("read.txt"," How are you I am fine thank you");
 const buf_data= fs.readFileSync("read.txt");
console.log(buf_data);
org_data=buf_data.toString();
console.log(org_data);
// to rename the file
fs.renameSync("read.txt","readWrite.txt");