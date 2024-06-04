import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };

        this.onSearchTitleChangeHandler = this.onSearchTitleChangeHandler.bind(this);
        this.onSearchSubmitHandler = this.onSearchSubmitHandler.bind(this);
    }

    onSearchTitleChangeHandler(event) {
        this.setState(() => {
            return { title:event.target.value };
        })
    }

    onSearchSubmitHandler(event) {
        event.preventDefault();
        this.props.onSearch(this.state);
    }

    render() {
        return (
            <form className="note-search" onSubmit={this.onSearchSubmitHandler}>
                <input type="text" placeholder="Search with Title..." onChange={this.onSearchTitleChangeHandler} value={this.state.title} />
            </form>
        );
    }
}

export default NoteSearch;