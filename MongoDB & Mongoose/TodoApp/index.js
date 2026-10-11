
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
const port = 8000;

app.listen(port,()=>{
    console.log("Server is running at port ",port);
})

mongoose.connect('mongodb+srv://minalkhartad14_db_user:O4rfUlR7l0Fxhyh9@cluster0.fipwqn2.mongodb.net/?appName=Cluster0').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const todoSchema = mongoose.Schema({
    title : {type: String , required : true},
    desc : { type : String},
    isCompleted: {type:Boolean , default:false}
},{timeStamps: true});


const TodoModel = mongoose.model("todo",todoSchema);

app.get('/',async (req,res)=>{
    const todoData = await TodoModel.find();

    res.render('index',{todoData:todoData});
});

app.post('/addTodo',async (req,res)=>{
    const {title} = req.body;
    const addedData = await TodoModel.create({
        title : title
    });
    res.redirect('/');
});

app.get('/deleteTodo/:id',async (req,res)=>{
    const id = req.params.id;
    const deleteData = await TodoModel.findByIdAndDelete(id);
    res.redirect('/');
})

app.get('/update/:id',async (req,res)=>{
    const id = req.params.id;
    const TodoDataToUpdate = await TodoModel.findById(id);
    res.render('updateTodo',{todoData : TodoDataToUpdate});
})


app.post('/updateTodo',async (req,res)=>{
     const {isCompleted , id } = req.body;
     

     const updatedData = await TodoModel.findByIdAndUpdate(id,{
        isCompleted: isCompleted
     });
     res.redirect('/');
});

app.get('/completedTodo',async (req,res)=>{
    const completedTodoData = await TodoModel.find({
        isCompleted: true
    })
    res.render('/completedTodo',{completedTodoData:completedTodoData});
})