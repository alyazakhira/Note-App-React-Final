import React from "react";
import { getInitialData, showFormattedDate } from "../utils"
import NoteSearch from "./NoteSearch";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteItem from "./NoteItem";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    onSearchHandler(title) {
        // 
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date()
                    },
                ],
            };
        });
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: !note.archived }
            }
            return note;
        })
        this.setState({ notes });
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    render() {
        const activeNotes = this.state.notes.filter((note) => note.archived === false);
        const archivedNotes = this.state.notes.filter((note) => note.archived === true);

        return (
            <main>
                <div className="note-app__header">
                    <h1>Note App</h1>
                    <NoteSearch onSearch={ this.onSearchHandler } />
                </div>
                <div className="note-app__body">
                    <NoteInput onAdd={this.onAddNoteHandler} />
                    <h2>Active Notes</h2>
                    <NoteList notes={activeNotes} onArchive={this.onArchiveNoteHandler} onDelete={this.onDeleteNoteHandler} />
                    <h2>Archive</h2>
                    <NoteList notes={archivedNotes} onArchive={this.onArchiveNoteHandler} onDelete={this.onDeleteNoteHandler} />
                </div>
            </main>
        )
    }
}

export default NoteApp;