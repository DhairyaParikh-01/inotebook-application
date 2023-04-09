const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../Middleware/fetchuser');

const JWT_SECRET = process.env.JWT_SECERET_KEY;

// ROUTE-1 :Register a user using POST "/api/auth/register". No login required
router.post('/register', async (req,res) => {
    let success = false;
    try
    {
        console.log(req.body); 
        // const user = User(req.body);
        let user  = await User.findOne({email: req.body.email});
        if(user){
            success = false;
            return res.status(400).json({sucess, error: "Sorry, a user with this email already exists"})
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
        success = true;
        res.json({success, jwtToken});
    }
    catch(error){
        console.error(error.message);
        success = false;
        res.status(500).send("Some Error Occured");
    }
});

// ROUTE-2:  Authenticate a user using POST  "/api/auth/login". No login required
router.post('/login', async (req,res) =>{
    let success = false;
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            success = false;
            return res.status(400).json({success, error: "Invalid credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({success, error: "Invalid credentials"});
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success ,jwtToken});

    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal server error");
    }
});

// ROUTE-3: Get a user details using POST "/api/auth/getuser". Login required

router.post('/getuser', fetchuser,  async (req,res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(400).send("Internal server error");
    }
})

module.exports = router;