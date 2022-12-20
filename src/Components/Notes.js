import { React, useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext';
import NoteItem from './NoteItem';
import Addnote from "./Addnote";

const Notes = () => {

    const { notes, addNote } = useContext(NoteContext);

    return (
        <div>
             <Addnote/>
            <h2>Your notes</h2>
            <div className="row">
                {notes.map((note) => {
                    return <NoteItem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes