import express from 'express';
import userData from './data/userData.js'// accesses the mock data file i created

const app = express();

const port = 3000;

app.get('/', (req,res)=>{
res.send('this is the base url')

})

app.get('/users',(req,res)=>{
res.send(userData)
   // console.log(userData)// returns the whole data array 
})

app.get('/users/:id', (req,res)=>{
const ids = userData.map(userData=> userData.id)
res.send(ids)
//console.log(ids) // this logs out only the ids array regardless of id requested... must fix 
console.log(req.params.id) 
// needs to return the object associated with the id and NOT just the id number or array. 
})


app.listen(port,()=>{
    console.log( `server listening at port ${port}`)
})