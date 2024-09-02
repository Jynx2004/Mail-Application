const mongoose=require("mongoose");


require("dotenv");


const dbConnect = () => {
    mongoose.connect("mongodb://localhost:27017/userrec")

    .then(() => console.log("DB Connection Successful "))

    .catch((err) => {
        console.log("DB Connection Issues");
        console.log(err);
        process.exit(1);
    });
};

module.exports= dbConnect;