import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Name() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;

    console.log(name);
    dispatch({ type: "NAME_TO_ADD", payload: newName})
  };

  useEffect(() => {
    setName();
  }, []);

  return (
    <div>
      <form>
        <input onChange={handleNameChange} placeholder="Name" />
      </form>
    </div>
  );
}

export default Name;