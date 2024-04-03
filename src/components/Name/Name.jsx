import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function Name() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')


  function handleNameChange() {
    setCurrentName(event.target.value)
  }
  return (
    <div>
      <form>
        <input onChange={handleNameChange} placeholder={currentName}/>
      </form>
    </div>
  );
}

export default Name;