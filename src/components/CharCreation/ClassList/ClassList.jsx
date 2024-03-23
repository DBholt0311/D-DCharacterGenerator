import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import './ClassList.css';


function ClassList() {
  const dispatch = useDispatch();
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
    setChosenClass(event.target.value);
    console.log(chosenClass);
    dispatch({type: "CLASS_TO_ADD", payload: chosenClass });
  }

  return (
    <div>
    <h1>Classes</h1>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      {classes.map((charClass) => (
        <tr key={charClass.id}>
          <td><button value={charClass.name} onClick={handleClassSelect}>{charClass.name}</button></td>
        </tr>
      ))}
    </table>
    <button><Link to="/abilityScores">Next</Link></button>
  </div>
  );
}
export default ClassList;
