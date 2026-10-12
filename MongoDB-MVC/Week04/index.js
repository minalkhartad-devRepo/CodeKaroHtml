
const express = require("express");
const app = express();
const port = 8000;
app.use(express.urlencoded({extended:true}));
const logger = require('./src/middlewares/logger');

const connectDB = require('./src/configs/db');
connectDB();

app.listen(port , ()=>{
    console.log("Server is connected successfully")
})

const userRouter = require('./src/routes/user');
app.use('/api/user', logger , userRouter);