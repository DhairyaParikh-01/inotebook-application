import { React, useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext';
import NoteItem from './NoteItem';
import Addnote from "./Addnote";

const Notes = (props) => {

    const { notes, getNotes, editNote } = useContext(NoteContext);
    const [note, setNote] = useState({etitle: "", edescription: "", etag: ""});
    const ref = useRef(null)
    const refClose = useRef(null)
    useEffect(() => {
        getNotes()
    }, [])
    const updateNote = (currentnote) => {
        setNote({eid: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag});
        ref.current.click();
    }
    const handleClick = (e) => {
        e.preventDefault();
        // addNote(note.title, note.description, note.tag);
        editNote(note.eid, note.etitle, note.edescription, note.etag);
        refClose.current.click();        
        props.showAlert("Note updated successfully!", "success");
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" ref={ref} style={{ display: "none" }}>
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="etitle">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle}  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edescription">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etag">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag}  />
                                </div>
                                {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Create Note</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <Addnote showAlert={props.showAlert}/>
            <h2>Your notes</h2>
            <div className="row">
                <div className="container">
                {notes.length===0 && 'No Notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem note={note} updateNote={updateNote} key={note._id} showAlert={props.showAlert} />
                })}
            </div>
        </div>
    )
}

export default Notes