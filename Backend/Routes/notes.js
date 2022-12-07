const express = require('express');
const router = express.Router();
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../Models/Notes');

// ROUTE-1: Get all the notes using GET "api/notes/getnotes"
router.get('/fetchallnotes', fetchuser, async  (req,res) => {
    const notes  = await Notes.find({user: req.user.id})
    res.json(notes);
})

// ROUTE-2: Add notes to database using POST "api/notes/addnote"
router.post('/addnote', fetchuser, async  (req,res) => {
    try {
        const {title, description, tag} = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);        
    } 
    catch (error) {
        res.status(500).send(" Internal server error");
    }
})
module.exports = router;