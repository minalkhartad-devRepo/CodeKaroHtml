
const express = require('express');
const User = require('../models/Users');

async function getUser(req , res){
    const userData = await User.find();
    res.json(userData);
}

async function createUser(req , res){
    const {name , email} = req.body;
    const newUserData = await User.create({name , email});
    res.status(201).json(newUserData);
}

async function editUser(req,res){
    const id = req.params.id;
    console.log("req.params.id =",req.params.id);
    const {name , email} = req.body;
    const editedData = await User.findByIdAndUpdate(id , {name , email});
    res.status(200).json("Data Updated successfully \n ",editedData);
}

async function deleteUser(req,res){
    const id = req.params.id;
    const deletedData = await User.findByIdAndDelete(id);
    res.status(200).json("Data Deleted successfully \n ",deletedData);
}

module.exports = {getUser , createUser , editUser , deleteUser };
