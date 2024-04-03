import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Name() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')
  
  
    useEffect(() => {
      setNewName('');
    }, []);

  
  function handleNameChange(event) {
    event.preventDefault();
    let chosenName = event.target.value;
    setNewName(chosenName);
    dispatch({ type: "NAME_TO_ADD", payload: chosenName });
  }
  
  return (
    <div>
      <form>
        <label>Name:</label>
        <input onChange={handleNameChange} placeholder={newName}/>
      </form>
    </div>
  );
}

export default Name;