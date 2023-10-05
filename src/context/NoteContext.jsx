import React, { useState } from "react";
export const NotesDataContext = React.createContext(null);

function NoteContext({ children }) {
  let [notesData, setNotesData] = useState([
    {
      title: "Feedbacks",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur optio ipsa autem, saepe ratio ea deserunt excepturi, doloremque a! Et aspernatur sit amet doloremque!",
      footText: "5 days ago",
    },
    {
      title: "Weekly Task",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur optio ipsa autem, saepe ratio ea deserunt excepturi, doloremque a! Et aspernatur sit amet doloremque!",
      footText: "2 weeksago",
    }
   
  ]);
  return <NotesDataContext.Provider value={{notesData,setNotesData}}>{children}</NotesDataContext.Provider>;
}

export default NoteContext;
