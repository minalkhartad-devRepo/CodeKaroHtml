
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    // res.send('<h1>Welcome</h1>')
    res.render('home');
})
app.get('/form',(req,res)=>{
    res.render('home');
})

app.post('/submit',(req,res)=>{
    console.log(req.body)
    res.render('personalDetails', {formData: req.body})
})

app.use((req, res) => { //new added for express 5 version , * path dont support
    res.status(404).render('404');
});

app.listen(8001,()=>{
    console.log('server is running on port 8001');
})