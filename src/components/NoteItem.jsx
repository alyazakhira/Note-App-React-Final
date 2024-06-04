import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({id, title, body, createdAt, archived, onArchive, onDelete}) {
    return (
        <div className="note-item">
            <NoteItemContent title={ title } body={ body } createdAt={ createdAt } />
            <NoteItemAction id={ id } archived={ archived } onArchive={ onArchive } onDelete={ onDelete } />
        </div>
    );
}

export default NoteItem;