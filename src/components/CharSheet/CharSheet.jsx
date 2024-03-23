import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function CharSheet() {
const charId = useSelector((store) => store.charId);

const fetchCharacter = () => {
  let chosenChar = charId;
  console.log(chosenChar);

  axios
  .get(`/api/characters/`)
  .then((response) => {
    console.log('RESPONSE:', response.data);
  })
  .catch((err) => {
    console.error(err);
  });
}

useEffect(() => {
  fetchCharacter({});
}, []);

    return (
      <div>
        <p>char sheet</p>
      </div>
    )
}

export default CharSheet;