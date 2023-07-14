// Creating Server

const http =require("http");
 const server= http.createServer((req,res)=>{
    if(req.url=="/")
    res.end("Hello From the other side shahsant ");
else if(req.url=="/about"){
    res.end("Hello from the AboutUS sides");
}
else if(req.url=="/whatsapp"){
    res.end("Hello from the Whatsapp sides");
}
else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>404 error page does not exist</h1>");
}
 });
 server.listen(1010,"127.0.0.1",()=>{
    console.log("listening to the port Number ");
 });