// Create an instance of Express Server
const express = require("express");
const app= express();
const cors = require('cors');
const dbConnect=require("./config/database");
const PORT = process.env.PORT || 4000;
const userRoutes=require("./routes/rout");

// Load env variables in process.env 
require("dotenv").config();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE',  // Allow these methods
  }));

//Middleware
app.use(express.json());

//Mount API routes
app.use("/api/v1",userRoutes);

//Server Listen at PORT

app.listen(PORT , () =>{
    console.log(`APP RUNNIG AT ${PORT}`);
});

//DB Connect

dbConnect();











