import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function CharSheet() {
  const newId = useSelector((store) => store.CharId);
  const [char, setChar] = useState(newId);

  const fetchCharacters = () => {

    axios
      .get(`/api/characters/${newId}`, newId)
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let newChar = response.data;
        setChar(newChar);
        console.log(newChar)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setChar([]);
  }, [])

    return (
      <div>
        <p>{char.name}</p>

      </div>
    )
}

export default CharSheet;