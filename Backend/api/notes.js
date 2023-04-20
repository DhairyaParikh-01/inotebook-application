const express = require('express');
const router = express.Router();
const fetchuser = require('../Middleware/fetchuser');
const Notes = require('../Models/Notes');

// ROUTE-1: Get all the notes using GET "api/notes/getnotes". Login required
router.get('/fetchallnotes', fetchuser, async  (req,res) => {
    const notes  = await Notes.find({user: req.user.id})
    res.json(notes);
});

// ROUTE-2: Add notes to database using POST "api/notes/addnote". Login required
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
});

// ROUTE-3: To update an existing note using "api/notes/updatenote". Login Required
router.put('/updatenote/:id', fetchuser, async  (req,res) => {

    try {
        const {title, description, tag} = req.body;
        const newNote = {};
        if(title){
            newNote.title = title;
        }
        if(description){
            newNote.description = description;
        }
        if(tag){
            newNote.tag = tag;
        }
    
        //Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if(!note){
            res.status(404).send("Not Found");
        }

        // Allow updation only if user owns it OR checking the authenticity of the user that wanted to perform this operation
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Access denied for this operation");
        }
    
        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
        res.json({note});        
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
});


// ROUTE-4: To Delete an existing note using "api/notes/deletenote". Login Required
router.delete('/deletenote/:id', fetchuser, async  (req,res) => {
    try {

        //Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user owns it OR checking the authenticity of the user that wanted to perform this operation
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Access denied for this operation");
        }
    
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({"success": "Note has been deleted successfully", note});        
    }
    catch (error) {
        res.status(500).send("Internal server error");
    }
});



module.exports = router;