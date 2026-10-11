
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://minalkhartad14_db_user:O4rfUlR7l0Fxhyh9@cluster0.fipwqn2.mongodb.net/?appName=Cluster0/ck-users').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

//create schema
const userSchema = mongoose.Schema({
    name : { type: String, required: true },
    email : { type : String , unique : true , required : true }
})

const User = mongoose.model('user', userSchema);

app.post('/api/users', async (req, res) => {
  console.log("req.body:", req.body);
  const { name, email } = req.body;
  const data = await User.create({ name, email });
  console.log("new data added", data);
  return res.json({ message: 'User created successfully', data });
});

app.get('/api/users', async (req, res) => {
    const data = await User.find();
    return res.json({ message: 'Users retrieved successfully', data });
});

app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const data = await User.findById(id);
    return res.json(data);
});

app.delete('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    return res.json(data);
});

app.patch('/api/user/:id',async (req,res)=>{
    const id = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(id,{name, email });
    return res.json("user data updated",user);
})