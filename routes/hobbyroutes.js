import express from "express";
import hobbies from "../data/hobbiesData.js";

const hobbyRouter = express.Router();

function addHobbyConfirm(req,res,next){
    console.log(`New hobby added for user ${req.body.userId}!`)
    next();
}

hobbyRouter.get("/", (req, res) => {
  res.json(hobbies);
});

hobbyRouter.post("/", addHobbyConfirm, (req, res ) => {
  const { userId, hobby } = req.body;

  if(!(userId && hobby)){
return res.status(400).json({message:"All fields required!"})
  }
  const newHobby= {
    userId,
    hobby,
  }
 hobbies.push(newHobby)
  
  return res.status(201).json({message:"New hobby made!", hobby: newHobby})

});

export default hobbyRouter;