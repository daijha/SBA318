import express from 'express';
import userData from './data/userData.js'// accesses the mock data file I created

const app = express();

const port = 3000;

app.get('/', (req,res)=>{
res.send('this is the base url')

})

//gets entire array 
app.get('/users',(req,res)=>{
res.json(userData)
   // console.log(userData)// returns the whole data array. since it is a object. use res.json 
})


// get array of ids only 
app.get('/users-id-list', (req,res)=>{// had to give it a unique name so it does not interfre with the id number selection 
const ids = userData.map(userData=> userData.id)// makes a new array of the ids in the original array only 
//console.log(ids)
res.json(ids)
})

// get array of names only 
app.get('/users/names', (req,res)=>{
    const names = userData.map(userData=> userData.name)// remember to use. map 
    //console.log('hit')
    res.json(names)
    
})

//get array of favcolor only 
app.get('/users/favcolor', (req,res)=>{
    const favoriteColor = userData.map(userData=> userData.favoriteColor)
    res.json(favoriteColor)
    
})
// get array of  passion only 
app.get('/users/passions', (req,res)=>{
    const passions = userData.map(userData=> userData.passion)
   // console.log('hit')
    res.json(passions)
    
})
// get array of messages only 
app.get('/users/messages', (req,res)=>{
    const messages = userData.map(userData=> userData.message)
    console.log('hit')
    res.json(messages)
    
})

// static info over the dynamic stuff. 
//gets object of one user 
app.get('/users/:id', (req,res)=>{
// console.log(req.params.id) // pulls one id 
const userId = Number(req.params.id);// store it in a variable 
const selectedUser = userData.find(user => user.id === userId)// goes through the array and finds the object with the id 
//console.log (selectedUser)// returns one user object from the array, selecting it with the id 
res.json(selectedUser)// consider making the middleware to verify this id exists? 
})





app.listen(port,()=>{
    console.log( `server listening at port ${port}`)
})