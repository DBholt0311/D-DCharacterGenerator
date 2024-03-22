import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Name() {
  const dispatch = useDispatch();


  const handleNameChange = (event) => {
    setNewChar({
        name: event.target.value,
        user_id: user.id
    });
    console.log(newChar);
  };

  useEffect(() => {
  }, []);

  const handleNameSubmit = (event) => {
    dispatch({ type: "CREATE_CHAR", payload: newChar})
  }

  return (
    <div>
      <form>
        <input onChange={handleNameChange} placeholder="Name" />
        <button onClick={handleNameSubmit}>Select</button>
      </form>
    </div>
  );
}

export default Name;
