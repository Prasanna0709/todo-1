const mongoose = require("mongoose");
const AppError = require("./utils/errorUtils/AppError");

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ Database is connected Successfully !");
    }catch(err){
        console.log("❌ Error : ",err);
        throw new AppError(500 , "fail" , "Failure in connecting the Database !");
    }
}

connectDb();