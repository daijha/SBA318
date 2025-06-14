//imports:
import express from "express";
import userData from "./data/userData.js"; // accesses the mock data file I created

//imports for routers:
import router from "./routes/userRoutes.js";


const app = express();
app.use(express.json()); // middleware to parse to json

const port = 3000;

//applying the routers
app.use("/users", router);// has to be after app declaration

// base url
app.get("/", (req, res) => {
  res.send("this is the base url");// works 
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
