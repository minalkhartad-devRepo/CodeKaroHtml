
const http = require('http');
const fs = require('node:fs');
let randomNum = 0;

setInterval(()=>{ 
    randomNum = Math.floor(Math.random() * 20);
},2000);


const myServer =  http.createServer((req, res)=>{

    // fs.writeFile('server.log',"Server Logs of port 8001",(err)=>{
    //     if(err) console.log("Error occurred : ",err);
    //     else console.log("file created");
    // });
    // const serverStartTime = Date.now();
    // const ipAddress = req.socket.remoteAddress;

    let logToBeAdded = `Server request received from '${req.url}' at '${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}'\n`;
    fs.appendFile('server.log', logToBeAdded, (error) => {

        if(error) console.log("Error occurred ")
        else{
            let responseHtml = `<h4>Random Number: ${randomNum}</h4>`;

            switch (req.url) {
                case '/':
                    responseHtml = `<h3>This is Home page</h3>` + responseHtml;
                    break;
                case '/about':
                    responseHtml = `<h3>This is About page</h3>` + responseHtml;
                    break;
                case '/enquiry':
                    responseHtml = `<h3>This is Enquiry page</h3>` + responseHtml;
                    break;
                default:
                    responseHtml = `<h3>404, page not found</h3>`;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(responseHtml);            
            }
    });
})

myServer.listen(8001,()=>{
    console.log("Server started running at port 8001");
})


