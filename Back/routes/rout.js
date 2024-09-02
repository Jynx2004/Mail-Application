const express= require("express");
const router = express.Router();
const { createUser } = require("../controllers/createUser");

// Creating routes and mapping it to the appropriate controller

router.post("/createuser",  createUser );

module.exports=router;