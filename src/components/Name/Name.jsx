import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function Name() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')
  
  
    useEffect(() => {
      setNewName('');
    }, []);

  
  function handleNameChange(event) {
    const chosenName = event.target.value;
    setNewName(chosenName);
    dispatch({ type: "NAME_TO_ADD", payload: newName });
  }
  
  return (
    <div>
      <form>
        <label>Name:</label>
        <input onChange={handleNameChange} placeholder="Enter name"/>
      </form>
    </div>
  );
}

export default Name;