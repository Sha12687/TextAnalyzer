const fs=require("fs");
const bioData={
    name : "shashant",
    age :24,
    HighQualificatiobn : "B.tech"
};
// const data =JSON.stringify(bioData)
// console.log(data);
// const objData=JSON.parse(data);
// console.log(objData);


// convert to JSON
const jsondata =JSON.stringify(bioData);
// fs.writeFile('json.json',jsondata,(err)=>{
//     console.log("Done");
// });
fs.readFile('json.json', "utf-8",(err,data)=>{
    const data1=JSON.parse(data);
    console.log(data1);
});