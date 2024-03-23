import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function CharSheet() {
const charId = useSelector((store) => store.charId);
  axios
  .get(`/api/characters/${charId}`)
  .then((response) => {
    console.log('RESPONSE:', response.data);
    setChar(response.data);
  })
  .catch((err) => {
    console.error(err);
  });
    return (
      <div>
        <p>char sheet</p>
      </div>
    )
}

export default CharSheet;