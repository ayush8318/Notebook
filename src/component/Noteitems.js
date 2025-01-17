import React, { useContext,useState} from "react";
import noteContext from "../context/notes/noteContext";
function Noteitems(props) {
  const context=useContext(noteContext);
const {deleteNote}=context;
    const {note,updateNote}=props; 
  return (
    <div className='col-md-3'>
      <div className="card my-3" >
  
  <div className="card-body">
    {/* <h5 className="card-title">{note.title}</h5> */}
    <div className="d-flex align-items-center">{ note.title}<i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id);
      props.showalert("deleted successfully","success");
    }}></i>
    <i className="fa-solid fa-pen-to-square mx-2 "  onClick={()=>{updateNote(note);props.showalert(" updated successfully","success");}}></i></div>
    <p className="card-text">{ note.description}</p>
    
     
  </div>
</div>
    </div>
  )
}

export default Noteitems
