import { React, useContext, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext';

const Addnote = (props) => {
    const { addNote } = useContext(NoteContext);
    const [note, setNote] = useState({title: "", description: "", tag: ""});
    const noteElementTitle = document.getElementById("title");
    const noteElementDescription= document.getElementById("description");
    const noteElementTag = document.getElementById("tag");
    const addnote = document.getElementById("addnote");
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        noteElementTitle.value = "";
        noteElementDescription.value = "";
        noteElementTag.value = "";
        addnote.disabled = true;
        props.showAlert("Note added Successfully!", "success");
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }
    return (
        <div>
            <h1>Add a Note Here</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}  />
                </div>
                <button type="submit" className="btn btn-primary" id="addnote" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<1} onClick={handleClick}>Create Note</button>
            </form>
        </div>
    )
}

export default Addnote
