import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

function CharCreationRace() {
    const dispatch = useDispatch();
    const [races, setRaces] = useState([]);

    function fetchRaces() {
    axios
    .get("https://www.dnd5eapi.co/api/races")
    .then((raceResponse) => {
        setRaces(raceResponse.data)
        console.log(races)
    })
    .catch((error) => {
        console.log('error retrieving races', error);
    });
}

useEffect(() => {
    fetchRaces();
  }, []);

  return <p>races here</p>

}

export default CharCreationRace;