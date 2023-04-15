require("dotenv").config();
const mongoose = require('mongoose');

const connect_to_mongo = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Mongo DB successflly!");
    } 
    catch(err){
        console.log(err);
    }
}

module.exports = connect_to_mongo;