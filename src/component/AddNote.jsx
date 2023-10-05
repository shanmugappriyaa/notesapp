import React, { useContext, useEffect, useState } from "react";
import { NotesDataContext } from "../context/NoteContext";
import { CardIndexContext } from "../context/IndexContext";

function AddNote(props) {
  const { notesData, setNotesData } = useContext(NotesDataContext);
  const { contextCardIndex, setContextCardIndex } =
    useContext(CardIndexContext);
  console.log("context index-->", contextCardIndex);

  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [addNote, setAddNote] = useState("Add a Note");
  const [saveButton, setSaveButton] = useState("Save");

  useEffect(() => {
    console.log(contextCardIndex);
    if (contextCardIndex > -1) {
      const notes = notesData[contextCardIndex];
      setTitle(notes.title);
      setBodyText(notes.bodyText);
      setAddNote("Edit the Notes");
      setSaveButton("Update");
    }
  }, [contextCardIndex]);

  const handleSave = () => {
    const newArray = [...notesData];
    if (contextCardIndex === -1) {
      newArray.push({ title, bodyText, footText: "few minutes ago" });
    } else {
      newArray[contextCardIndex] = {
        title: title,
        bodyText: bodyText,
      };
      setContextCardIndex(-1);
      setAddNote("Add a Note");
      setSaveButton("Save");
    }
    setTitle("");
    setBodyText("");
    setNotesData(newArray);
  };
  return (
    <>
      <div className="card empty-card p-4">
        <h5 className="card-title">{addNote}</h5>
        <input
          className=" mb-4  mt-4 no-border"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="mb-2 no-border"
          value={bodyText}
          onChange={(e) => setBodyText(e.target.value)}
          placeholder="Take a note..."
        />
        <div>
          <button onClick={() => handleSave()}>{saveButton}</button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
