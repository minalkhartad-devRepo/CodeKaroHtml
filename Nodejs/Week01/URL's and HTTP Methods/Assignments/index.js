
const http = require('http');
const fs = require('fs');
const url = require('url')


const myServer = http.createServer((req , res ) => {

    //log file is created
    // fs.writeFile('log.txt',"server data logged here",(error)=>{
    //     if(error) console.log("Error is found ",error);
    //     else {
    //         console.log("log.txt file is created");
    //     }       
    // })
    // console.log("req.url =", req.url);

    if(req.url === '/favicon.ico' || req.url === '/.well-known/appspecific/com.chrome.devtools.json') return res.end();
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);

    let logData = `\nServer request received from '${req.url}' at '${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}' `
    const {pathname , query , search  }= myUrl;
    console.log("pathname =", pathname , "\nquery =", query , "\nsearch =", search);
    const {name , age}  = query;
    logData = (pathname === '/search' && name && age)  
                ?  logData + `with search parameter name : ${name} and age : ${age}` 
                : logData; // append data to file only handled for search query parameter

    fs.appendFile('log.txt', logData ,(error)=>{
        if(error) console.log("Error while appending data",error);
        else {
            switch(pathname){
                        case '/':
                            res.end(`<h1> Hello user , pls request valid url </h1>`);
                            break;
                        case '/home':
                            res.end(`<h1> Hello user , this is home screen </h1>`);
                            break;
                        case '/profile':
                            res.end(`<h1> Hello user , this is profile screen</h1>`);
                            break; 
                        case '/search':                
                            if (name && age) { // handle condition ony if query parameter is been passed
                                res.end(`<h1>Hello ${name} with age ${age}, this is search screen</h1>`);
                            } else {
                                res.end(`<h1>Hello user , this is search screen , please provide both name and age </h1>`);
                            }
                            break;           
                        default :
                            res.end(`<h1> This is default page</h1>`); 
                }
        }
                
    })
    
});

myServer.listen(8001 , ()=>{
    console.log("Server is running on port 8001");
})