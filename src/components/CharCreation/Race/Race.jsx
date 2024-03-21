import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Race() {
let races = [];
  function fetchRaces() {
    axios
      .get("https://www.dnd5eapi.co/api/races")
      .then((raceResponse) => {
        console.log(raceResponse.data)
      })
      .catch((error) => {
        console.log("error retrieving races", error);
      });
  }



  useEffect(() => {
    fetchRaces();
  }, []);

  return (
    <div>
      <p>races here</p>
    </div>
  );
}

export default Race;
