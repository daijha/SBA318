import express from 'express';
import userMessages from '../data/userMessages.js';

const messagesRouter= express.Router();

//gets entire array 
messagesRouter.get('/',(req,res)=>{
res.json(userMessages);
})

//gets object of one user with id param. refer to userData for notes on this
messagesRouter.get('/:id', (req,res)=>{
const userId = Number(req.params.id);
const selectedUser = userMessages.find(user => user.userId === userId)// goes through the array and finds the object with the id that matches the request 
//console.log (selectedUser)
res.json(selectedUser) 
})

export default messagesRouter;