import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="What happend today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://images.unsplash.com/photo-1654028717505-9645b5454603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
