import { React, useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext';

const NoteItem = (props) => {
    const { note } = props;
    const { deleteNote } = useContext(NoteContext);
    return (
        <div className="col-md-3">
            <div className="card my-3" >
                    <div className="dropdown my-2" style={{float: "right"}}>
                        <button className="btn btn-dark mx-2" type="button" data-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item " href="/"><i className="fa-regular fa-pen-to-square mx-2"></i>Edit</a>
                            <a className="dropdown-item " href="/" onClick={(e)=>{e.preventDefault(); deleteNote(note._id)}} ><i className="fa-solid fa-trash-can mx-2" ></i>Delete</a>
                        </div>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Tag: {note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
            {/* {note.title}
            {note.description} */}
        </div>
    )
}

export default NoteItem