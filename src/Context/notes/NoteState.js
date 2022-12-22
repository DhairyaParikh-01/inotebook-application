import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify()
    });
    const json = await response.json();
    setNotes(json);
  }

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = async (title, description, tag) => {
    //  API call for add a new note.
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  }

  // Delete a note
  const deleteNote = async (id) => {
    //  API call to delete a note with given id
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify()
    });
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //  API call to fetch the notes from database and to edit a note with given id
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;