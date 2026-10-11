const express = require('express');
const fs = require('fs');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


app.get('/',(req, res)=>{
    res.render('home');
})


app.listen('8001',()=>{
    console.log("Server is been started at port 8001");
})