import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function Name({charName}) {
  const dispatch = useDispatch();
  let currentName = charName;
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;

    console.log(name);
    dispatch({ type: "NAME_TO_ADD", payload: newName})
  };

  useEffect(() => {
    setName(currentName);
  }, []);

  return (
    <div>
      <form>
        <input onChange={handleNameChange} placeholder={currentName} />
      </form>
    </div>
  );
}

export default Name;