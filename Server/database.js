const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connection to Database established successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); 
    }
};

module.exports = connectDB;
