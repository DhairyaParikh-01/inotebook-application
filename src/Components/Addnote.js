import { React, useContext, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext';

const Addnote = () => {
    const { addNote } = useContext(NoteContext);
    const [note, setNote] = useState({title: "", description: "", tag: ""});
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
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
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Create Note</button>
            </form>
        </div>
    )
}

export default Addnote
