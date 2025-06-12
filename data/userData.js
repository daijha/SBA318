//array of objects containg user data to be accessed later 
import express from 'express';
const user= express.Router();

const userData = [
    {id: 0, name:"Dai'jha", favoriteColor: "Black", passion:"Music", message:"If you take my music from me, I'll die."},
    {id: 1, name:"Harry", favoriteColor: "Red", passion:"Wizardry", message:"If you take my magic from me, I'm just a muggle."},
    {id: 2, name:"George", favoriteColor: "Brown", passion:"Curiosity", message:"I'm just a nosy monkey who gets into things"}
];
export default userData