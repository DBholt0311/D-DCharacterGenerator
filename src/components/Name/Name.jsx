import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Name() {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('')

  useEffect(() => {
    setNewName('');
  }, []);

  function handleNameChange(event) {
    let name = event.target.value
    setNewName(name)
    dispatch({ type: "NAME_TO_ADD", payload: newName });
  }
  return (
    <div>
      <form>
        <input onChange={handleNameChange} placeholder={newName}/>
      </form>
    </div>
  );
}

export default Name;