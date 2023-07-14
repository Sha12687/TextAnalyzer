const EventEmitter =require("events");
const event =new EventEmitter();
event.on("sayMyName",()=>{
    console.log("your name is shashant");
});
event.on("sayMyName",()=>{
    console.log("your name is chaudhary");
});
event.on("sayMyName",()=>{
    console.log("your name is B.tech");
});
event.on("showPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}` );
})
event.emit("sayMyName");
event.emit("showPage",200,"Ok")