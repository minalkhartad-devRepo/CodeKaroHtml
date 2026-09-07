
const fs = require('node:fs');

// create a new file
// fs.writeFile('consoleErrorFile.txt',"filesystemError is been logged",(err)=>{
//     if(err) console.log(err);
//     else console.log("console file added");
// }
// );

// append data/ add data to existing file
// fs.appendFile('consoleErrorFile.txt',"\nArithmeticError is been logged",(err)=>{
//     if(err) console.log(err);
//     else console.log("console file updated");
// }
// );

//copy file data
// fs.copyFile('consoleErrorFile.txt','consoleErrorFileBackup.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("consoleErrorFile file copied done");
// }
// );

//copy file data
// fs.copyFile('consoleErrorFile.txt','./backup/consoleErrorFileBackup.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("consoleErrorFile file copied done");
// }
// );

//rename File
// fs.rename('consoleErrorFileBackup.txt','secondConsoleErrorFileBackup.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("consoleErrorFileBackup file backup done");
// }
// );

//delete file
// fs.unlink('secondConsoleErrorFileBackup.txt',(error)=>{
//     if(error) console.log(error);
//     else console.log(" file deleted");
// })

//delete folder and all its files
fs.rmdir('./backup',{recursive:true},(error)=>{
    if(error) console.log(error);
    else console.log(" file deleted");
})