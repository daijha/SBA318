import express from 'express';
import userInterests from '../data/userInterests.js';

const interestsRouter= express.Router();

//gets entire array 
interestsRouter.get('/',(req,res)=>{
res.json(userInterests)
})

//gets object of one user with id param. refer to userData for notes on this
interestsRouter.get('/:id', (req,res)=>{
const userId = Number(req.params.id);
const selectedUser = userInterests.find(user => user.userId === userId)// goes through the array and finds the object with the id that matches the request 
//console.log (selectedUser)
res.json(selectedUser) 
})

export default interestsRouter;