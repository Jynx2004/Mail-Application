const mongoose=require("mongoose");
const nodemailer = require("nodemailer");

const User = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    subject:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true,
    }

});

User.post("save" , async function(doc){
    try{
        console.log(doc);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from:`Ajinkya`,
            to: doc.email,
            subject:doc.subject,
            html:doc.message,
        })
        
        console.log("INFO", info);

    }

    catch(error)
    {
        console.error(error);

    }
})



module.exports = mongoose.model("User", User);