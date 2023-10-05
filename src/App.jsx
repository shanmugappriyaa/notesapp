import { useState } from "react";
import Card from "./Card";
import "./App.css";
import AddNote from "./AddNote";
import NoteContext from "./NoteContext";
import IndexContext from "./IndexContext";
import Descicon from "./assets/description.svg"

function App() {
  const [cardIndex, setCardIndex] = useState(-1);
  return (
    <>
      {/* Card */}
      <div className="row">
        <div className="col-3">
          <h1>Notes App</h1>
          <div className="notes-btn">
            <img src={Descicon} />&nbsp;&nbsp;
            <label>Notes</label>
          </div>
        </div>
        <div className="col-9">
          <NoteContext>
            <IndexContext>
              <AddNote/>
            
              <Card/>
            </IndexContext>
          </NoteContext>

        </div>

      </div>
    </>
  );
}

export default App;
