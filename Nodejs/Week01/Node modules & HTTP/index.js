
const http = require('http');
const fs = require('node:fs');

// fs.writeFile('serverLog.txt','Server logs been added\n',()=>{
//     console.log('serverLog txt file added');
// })

const myserver = http.createServer((req,res)=>{
    let logToBeAdded = `Server request received from '${req.url}' at '${Date.now()}'\n`;
    fs.appendFile('serverLog.txt',logToBeAdded,()=>{
        switch(req.url){
            case '/':
                res.end('<h1>This is Home page</h1>')
                break
            case '/about':
                res.end('<h1>This is About page</h1>')
                break
            case '/career':
                res.end('<h1>This is Career page</h1>');
                break;
            default:
                res.end('<h1>404, page not found</h1>')    
        }
    })  
   
});

myserver.listen(8000,()=>{
    console.log("Server is running at port 8000");
})