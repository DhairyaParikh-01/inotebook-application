import {useState} from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) =>{
    const notesInitial = [ 
        {
          "_id": "6390e6e90b13263856f2b9ec",
          "user": "6390bcfa2eac854b42260459",
          "title": "My sencond note",
          "description": "Do yoga, drink yogut",
          "tag": "Health",
          "date": "2022-12-07T19:18:01.596Z", 
          "__v": 0
        },
        {
          "_id": "6391c60d02a0504d15147012",
          "user": "6390bcfa2eac854b42260459",
          "title": "Daily to do list",
          "description": "Okay so this is my daily todo list that includes my daily ration kind of things and all..",
          "tag": "Health", 
          "date": "2022-12-08T11:10:05.979Z",
          "__v": 0
        },
        {
          "_id": "6391c60d02a0504d15147012",
          "user": "6390bcfa2eac854b42260459",
          "title": "Daily to do list",
          "description": "Okay so this is my daily todo list that includes my daily ration kind of things and all..",
          "tag": "genral", 
          "date": "2022-12-08T11:10:05.979Z",
          "__v": 0
        },
        {
          "_id": "6391c60d02a0504d15147012",
          "user": "6390bcfa2eac854b42260459",
          "title": "Daily to do list",
          "description": "Okay so this is my daily todo list that includes my daily ration kind of things and all..",
          "tag": "sports", 
          "date": "2022-12-08T11:10:05.979Z",
          "__v": 0
        },
        {
          "_id": "6391c60d02a0504d15147012",
          "user": "6390bcfa2eac854b42260459",
          "title": "Daily to do list",
          "description": "Okay so this is my daily todo list that includes my daily ration kind of things and all..",
          "tag": "Health", 
          "date": "2022-12-08T11:10:05.979Z",
          "__v": 0
        },
        {
          "_id": "6391c60d02a0504d15147012",
          "user": "6390bcfa2eac854b42260459",
          "title": "Daily to do list",
          "description": "Okay so this is my daily todo list that includes my daily ration kind of things and all..",
          "tag": "Lifestyle", 
          "date": "2022-12-08T11:10:05.979Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);

      // Add a note
      const addNote = (title, description, tag) => {
        // TODO : API call for fetching notes.
        console.log("Adding a note");
       const newNote = {
          "_id": "6391c60d02a0504d15147016",
          "user": "6390bcfa2eac854b42260459",
          "title": title,
          "description": description,
          "tag": tag, 
          "date": "2022-12-08T11:10:05.979Z",
          "__v": 0
        };
        setNotes(notes.concat(newNote));
      }

      // Delete a note
      const deleteNote = () => {

      }

      // Edit a note
      const editNote = () => {

      }

    return(   
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;