const os=require("os");
console.log(os.arch());
const freeMemory=os.freemem();
console.log(`${freeMemory/1024/1024/1204}`);
const totmemory=os.totalmem();
console.log(`${totmemory/1024/1024/1204}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());