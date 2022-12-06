const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'Mynameis@nthony';

router.get('/', async (req,res) => {
    try
    {
        console.log(req.body); 
        // const user = User(req.body);
        let user  = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry, a user with this email already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword
        })
        const data = {
            user:{
                id: user.id
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET);
        console.log(jwtToken);
        user.save();

        res.send(jwtToken);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Occured");
    }
})

module.exports = router;