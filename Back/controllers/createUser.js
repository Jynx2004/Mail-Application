const User = require("../models/User");

exports.createUser = async (req,res) => {

    try{

        console.log("req body", req.body);
        const {name,email,subject,message}=req.body;
        if(!name || !email || !subject || !message){
            console.log("please fill all details");
            return res.status(400).json({
                status:400,
                meassage:"Please fill all fields"

            })
        }

        const user = await User.create({
            name,
            email,
            subject,
            message
        });

        return res.status(200).json({
            status:201,
            message:"User created",
            data:user,
        });

    }

    catch(error){

        console.log("error",error);
        return res.status(500).json({
            status:500,
            message:"failed to create user"
        });

    }

};
