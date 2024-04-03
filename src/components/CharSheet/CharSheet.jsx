import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";


function CharSheet() {
  const newId = useSelector((store) => store.CharId);
  const [char, setChar] = useState({})
  
  const fetchCharacters = () => {
    axios
      .get(`/api/characters/${newId}`, newId)
      .then((response) => {
        console.log("RESPONSE:", response.data);
        let newChar = {
          name: response.data[0].character_name,
          charClass: response.data[0].class,
          race: response.data[0].race,
          background: response.data[0].background,
          alignment: response.data[0].alignment,
          exp: response.data[0].experience_points,
          lvl: response.data[0].level,
          hp: response.data[0].hit_points,
          strength: response.data[0].strength,
          dexterity: response.data[0].dexterity,
          constitution: response.data[0].constitution,
          wisdom: response.data[0].wisdom,
          intelligence: response.data[0].intelligence,
          charisma: response.data[0].charisma,
          charId: response.data[0].id
        };
        console.log(newChar);
        setChar(newChar);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
    setChar({});
  }, []);



  return (
    <div>
      <label>Name:</label>
      <input placeholder={char.name} />
      <label>Race:</label>
      <input placeholder={char.race} />
      <label>Class:</label>
      <input placeholder={char.charClass} />
      <label>Background:</label>
      <input placeholder={char.background} />
      <label>Alignment:</label>
      <input placeholder={char.alignment} />
      <label>HP:</label>
      <input placeholder={char.hp} />
      <label>Str:</label>
      <input placeholder={char.strength} />
      <label>Dex:</label>
      <input placeholder={char.dexterity} />
      <label>Con:</label>
      <input placeholder={char.constitution} />
      <label>Wis:</label>
      <input placeholder={char.wisdom} />
      <label>Int:</label>
      <input placeholder={char.intelligence} />
      <label>Char:</label>
      <input placeholder={char.charisma} />
      <button ><Link to="/user">Update</Link></button>
    </div>
  );
}

export default CharSheet;