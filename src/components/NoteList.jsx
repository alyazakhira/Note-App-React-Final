import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onArchive, onDelete}) {
    return (
        <div className="note-list">
            { 
                notes.length > 0
                ? notes.map((note) => (<NoteItem key={ note.id } id={ note.id } onArchive={ onArchive } onDelete={ onDelete } {...note} />)) 
                : <p className="note-list__empty-message">There's nothing here...</p>
            }
        </div>
    );
}

export default NoteList;