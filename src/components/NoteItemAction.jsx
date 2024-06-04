import React from "react";

function NoteItemAction({id, archived, onArchive, onDelete}) {
    return(
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={ ()=>onDelete(id) }>Delete</button>
            {
                archived === true
                ? <button className="note-item__archive-button" onClick={ ()=>onArchive(id) }>Unarchive</button>
                : <button className="note-item__archive-button" onClick={ ()=>onArchive(id) }>Archive</button>
            }
            
        </div>
    );
}

export default NoteItemAction;