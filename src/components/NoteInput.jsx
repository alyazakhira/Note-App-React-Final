import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return { title: event.target.value.slice(0, 50) }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return { body: event.target.value }
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.onAdd(this.state);
    }

    render() {
        return (
            <section className="note-input">
                <h2>Add Note</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="note-input__title__char-limit">{ this.state.title.length }/50</p>
                    <input className="note-input__title" type="text" placeholder="Write your awesome title here" onChange={this.onTitleChangeHandler} value={this.state.title} required />
                    <textarea className="note-input__body" type="text" placeholder="Share your thoughts" onChange={this.onBodyChangeHandler} value={ this.state.body } required></textarea>
                    <button type="submit">+ Add</button>
                </form>
            </section>
        );
    }
}

export default NoteInput;