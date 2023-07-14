const chalk=require("chalk");
const validator=require("validator");
console.log(chalk.blue("aayush"))
console.log(chalk.red.inverse("aayush"))
console.log(chalk.red.underline.bold("GFG"))
console.log(chalk.green.inverse("success"));
const res=(validator.isEmail('shashant@shahshantco.m')); //=> true
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));