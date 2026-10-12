
const fs = require('fs');


async function logger(req,res,next){
    //check file exists or not
    let fileExists = false;
    const fileName = 'mvclog.txt';
    try {
        fs.accessSync(fileName, fs.constants.F_OK);
        fileExists = true;
    } catch (err) {
        console.log("File does not exist");
    }

    const logData = `Requested url is ${req.originalUrl} by ip ${req.ip} \n`;

    //logger file created
    if (!fileExists) {
        fs.writeFile(fileName,logData,(err)=>{
            if(err) console.log("Error :",err);
            else {
                console.log(`${fileName} file is created`);
            }
        })
    }

    //append data to existing file
    fs.appendFile(fileName,logData,(err)=>{
        if(err) console.log("Error :",err);
    });

    next();
}

module.exports = logger;