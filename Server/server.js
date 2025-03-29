const express = require('express')
const app = express();
const postRoutes = require("./Routes/PostRoutes");
const connectDB = require("./database");
const route=require('./Routes/UserRoutes');
const cors=require('cors')
require("dotenv").config();
app.use(cors());
app.use(express.json());
connectDB(); 
app.use("/users",route)
app.use("/post",postRoutes);
app.get("/",(req,res)=>{
    console.log('The api call was recieved successfully');
    res.send("hi how are you");
})
app.listen(5000,()=>{
    console.log("Server started at port 5000");
})
