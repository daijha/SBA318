import express from "express";
import posts from "../data/postsData.js";

const postrouter = express.Router();

function confirmGetRequest (req,res,next){
    console.log(`Accessed! ${posts.length} entries obtained for this request`)
    next();
}

postrouter.get("/", confirmGetRequest, (req, res) => {
  res.json(posts);
});

postrouter.post("/", (req, res) => {
  const { postId, userId, greeting } = req.body;

  if(!(postId && userId && greeting)){
return res.status(400).json({message:"All fields required!"})
  }
  const newPost= {
    postId: posts.length +1,
    userId,
    greeting,
  }
  posts.push(newPost)
  
  return res.status(201).json({message:"New post made", post: newPost})

});

export default postrouter;
