const path = require("path");

//console.log(path.basename(__filename));  Base File name

//console.log(path.dirname(__filename));   Directory name

// console.log(path.basename(__dirname));  Base File name

// console.log(path.dirname(__dirname));   Directory name

// console.log(path.extname(__filename));  File Extension

console.log(path.parse(__filename).name); Create path obj
