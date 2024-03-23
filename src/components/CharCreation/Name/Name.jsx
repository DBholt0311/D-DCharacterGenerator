import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Name() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  let newChar = {
    column: "character_name",
    newName: name,
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
    console.log(name);
  };

  useEffect(() => {
    setName();
  }, []);

  const handleNameSubmit = (event) => {

  }

  return (
    <div>
      <form>
        <input onChange={handleNameChange} placeholder="Name" />
        <button onClick={handleNameSubmit} >Select</button>
      </form>
    </div>
  );
}

export default Name;