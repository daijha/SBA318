import express from 'express';
import userData from '../data/userData.js';

const userRouter= express.Router();

//gets entire array 
userRouter.get('/',(req,res)=>{
res.json(userData);
})

//gets object of one user with id param
userRouter.get('/:id', (req,res)=>{
//console.log(req.params.id) // the id# being requested 
const userId = Number(req.params.id);// store it in a variable 
const selectedUser = userData.find(user => user.userId === userId)// goes through the array and finds the object with the id that matches the request 
//console.log (selectedUser)// returns one user object from the array, selecting it with the id 
res.json(selectedUser)// consider making the middleware to verify this id exists? 
})


export default userRouter;