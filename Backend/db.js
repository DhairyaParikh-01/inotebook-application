const mongoose = require('mongoose');
const mongooseURI = "mongodb://localhost:27017/test";

const connect_to_mongo = () => {
    mongoose.connect(mongooseURI, () =>{
        console.log("Connected to Mongo DB successflly!");
    })
}

module.exports = connect_to_mongo;