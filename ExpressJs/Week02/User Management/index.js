
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

const users = [];

app.get('/',(req,res)=>{
    let usersCount  = users.length;
    res.render('homePage',{users, usersCount });
})

app.get('/adduser',(req,res)=>{
    res.render('addUser');
})

app.post('/submitUserData',(req,res)=>{
    let {fname , lname , email , phnno , profUrl} = req.body;
    let user = {
        fname : fname,
        lname : lname,
        email : email,
        phnno : phnno,
        profUrl : profUrl
    };
    users.push(user);
    let usersCount  = users.length;
    res.redirect('/');
})

app.post('/edit',(req,res)=>{
    console.log("req.body===",req.body);
    let {personId} = req.body;
    let user = users[personId];
    res.render('editUser',{user , personId });

})

app.post('/updateUserData',(req,res)=>{
    let {personId,fname , lname , email , phnno , profUrl} = req.body;
    let user = {
        fname : fname,
        lname : lname,
        email : email,
        phnno : phnno,
        profUrl : profUrl
    };
    users.splice(personId, 1, user);
    res.redirect('/');
})

app.post('/delete',(req,res)=>{
    let {personId} = req.body;
    users.splice(personId,1);
    res.redirect('/');
})

app.listen('8001',()=>{
    console.log("Server started at port 8001");
})