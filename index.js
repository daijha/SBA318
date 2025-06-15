//imports:
import express from "express";
import userData from "./data/userData.js"; // accesses the mock data file I created
import postData from "./data/postsData.js";
import hobbiesData from "./data/hobbiesData.js";

//imports for routers:
import router from "./routes/userRoutes.js";
import postRouter from "./routes/postRoutes.js";
import hobbyRouter from "./routes/hobbyroutes.js";


const app = express();
app.use(express.json()); // middleware to parse to json

const port = 3000;

//applying the routers
app.use("/users", router);// has to be after app declaration
app.use("/posts", postRouter);
app.use("/hobbies", hobbyRouter);

// base url
app.get("/", (req, res) => {
  res.send("this is the base url");// works 
});

//error handling middleware:
app.use((err,req,res,next)=> {
    console.log(`error:`, err.stack)// err.stack includes a stacktrace which is also used in js errors...
    res.status(500).json({message:"Error occurred"});
})
app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});

