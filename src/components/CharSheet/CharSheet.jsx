import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

function CharSheet() {
  const newId = useSelector((store) => store.CharId);
  const [char, setChar] = useState({});
  const [charUpdate, setCharUpdate] = useState({
    xp: char.exp,
    level: char.lvl,
    hit_points: char.hp,
    str: char.strength,
    dex: char.dexterity,
    con: char.constitution,
    wis: char.wisdom,
    int: char.intelligence,
    cha: char.charisma,
  });

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
          charId: response.data[0].id,
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

  const handleHpChange = (event) => {
    setChar({
      ...char,
      hp: event.target.value,
    });
  };

  const handleExpChange = (event) => {
    setChar({
      ...char,
      exp: event.target.value,
    });
  };

  const handleLvlChange = (event) => {
    setChar({
      ...char,
      lvl: event.target.value,
    });
  };

  const handleStrChange = (event) => {
    setChar({
      ...char,
      strength: event.target.value,
    });
  };

  const handleDexChange = (event) => {
    setChar({
      ...char,
      dexterity: event.target.value,
    });
  };

  const handleConChange = (event) => {
    setChar({
      ...char,
      constitution: event.target.value,
    });
  };

  const handleWisChange = (event) => {
    setChar({
      ...char,
      wisdom: event.target.value,
    });
  };

  const handleIntChange = (event) => {
    setChar({
      ...char,
      intelligence: event.target.value,
    });
  };

  const handleChaChange = (event) => {
    setChar({
      ...char,
      charisma: event.target.value,
    });
  };


  function handleCharUpdate() {
    axios
      .put(`/api/characters/${newId}`, char)
      .then((response) => {
        console.log("response:", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <p>Name: {char.name}</p>
      <p>Race: {char.race}</p>
      <p>Class: {char.charClass}</p>
      <p>Background: {char.background}</p>
      <p>Alignment: {char.alignment}</p>
    <form>
      <label>Exp:</label>
      <input onChange={handleExpChange} placeholder={char.exp}/>
      <label>Level</label>
      <input onChange={handleLvlChange} placeholder={char.lvl} />
      <label>HP:</label>
      <input onChange={handleHpChange} placeholder={char.hp} />
      <label>Str:</label>
      <input onChange={handleStrChange} placeholder={char.strength} />
      <label>Dex:</label>
      <input onChange={handleDexChange} placeholder={char.dexterity} />
      <label>Con:</label>
      <input onChange={handleConChange} placeholder={char.constitution} />
      <label>Wis:</label>
      <input onChange={handleWisChange} placeholder={char.wisdom} />
      <label>Int:</label>
      <input onChange={handleIntChange} placeholder={char.intelligence} />
      <label>Char:</label>
      <input onChange={handleChaChange} placeholder={char.charisma} />
      <button onClick={handleCharUpdate}>
        <Link to="/user">Update</Link>
      </button>
    </form>
    </div>
  );
}

export default CharSheet;
