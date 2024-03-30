import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './ClassList.css';


function ClassList() {
  const dispatch = useDispatch();
  const [hitDie, setHitDie] = useState(0)
  const [chosenClass, setChosenClass] = useState('');
  const [classes, setClasses] = useState([]);


  const fetchClasses = () => {
    console.log('in fetchClasses function');

    axios
      .get('/api/classes')
      .then((response) => {
        console.log('RESPONSE:', response.data);
        setClasses(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchClasses();
    setChosenClass([]);
  }, []);

  const handleClassSelect = (event) => {
    const newClass = event.target.value;
    setChosenClass(newClass);
    dispatch({type: "CLASS_TO_ADD", payload: newClass });
  }

  return (
    <div>
    <h1>Classes</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {classes.map((charClass) => (
        <tr key={charClass.id}>
          <td><button value={charClass.name} onClick={handleClassSelect}>{charClass.name}</button></td>
        </tr>
      ))}
      </tbody>
    </table>
    <p>Class: {chosenClass}</p>
    <button><Link to="/abilityScores">Next</Link></button>
  </div>
  );
}
export default ClassList;
