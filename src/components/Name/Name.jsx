import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Name() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')
  
  
    useEffect(() => {
      setNewName('');
    }, []);

  
  function handleNameChange(event) {
    const chosenName = event.target.value;
    setNewName(chosenName);
    dispatch({ type: "NAME_TO_ADD", payload: chosenName });
  }

  const handleUpdateName = (event) => {
    dispatch({
      type: "UPDATE_CHAR",
      payload: {
        column: "character_name",
        data: newName,
      },
    });
  };
  
  return (
    <div>
      <form>
        <label>Name:</label>
        <input onChange={handleNameChange} placeholder="Enter name"/>
      </form>
      <Button onClick={handleUpdateName}><Link to="charConfirmation">Review</Link></Button>
    </div>
  );
}

export default Name;