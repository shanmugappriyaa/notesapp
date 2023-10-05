import React, { useContext, useEffect, useState } from "react";
import { NotesDataContext } from "../context/NoteContext";
import { useParams } from "react-router-dom";
import { CardIndexContext } from "../context/IndexContext";


function Card(props) {
  const {notesData,setNotesData} = useContext(NotesDataContext)
  const {contextCardIndex,setContextCardIndex} = useContext(CardIndexContext);
  

   const handleEdit=(index) =>{
    setContextCardIndex(index)
    };
   
   

  const handleDelete = (index) => {
    const newArray = [...notesData];
    newArray.splice(index, 1);
    setNotesData(newArray);
  };
  return (
    <>
    <div className="card-title mb-2 mt-5">
      {/* <img src={DESCicon} className="" /> */}
      <i class="fa-regular fa-note-sticky"></i>&nbsp;&nbsp;
      My Notes
    </div>
    <label className="card-text">Recently viewed</label>
      <div className="d-flex  mt-2 scroll-card">
        {notesData.map((e, i) => {
          return (
            <div className="card tile-card p-4 ">
              <div className="row">
                <div className=" col-10 card-title ">{e.title}</div>
                <div className=" col-2 card-btns ">
                
                    <i className="fa-solid fa-pen" onClick={()=>handleEdit(i)} ></i> &nbsp;&nbsp;
                    <i className="fa-regular fa-trash-can" onClick={() => handleDelete(i)} ></i>
                </div>
              </div>
              
                <label className="card-text card-body-text">{e.bodyText}</label>
              
              <div className="card-text">{e.footText}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
