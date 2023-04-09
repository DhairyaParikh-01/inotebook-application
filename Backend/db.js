const mongoose = require('mongoose');
const mongooseURI = process.env.MONGODB_URL;

const connect_to_mongo = () => {
    mongoose.connect(mongooseURI, () =>{
        console.log("Connected to Mongo DB successflly!");
    })
}

module.exports = connect_to_mongo;