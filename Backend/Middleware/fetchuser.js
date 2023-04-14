require("dotenv").config();
const jwt = require('jsonwebtoken');

const fetchuser = ((req,res,next) => {
    //Get the user from the jwtToken and id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please pass token in header"});
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();        
    } catch (error) {
        console.error(error.message);
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
})

module.exports = fetchuser;