const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const NotesSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    tag : {
        type: String,
        required: true,
        default: "Genral"
    },
    date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('note', NotesSchema);