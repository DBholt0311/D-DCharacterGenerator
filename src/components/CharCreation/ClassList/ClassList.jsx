import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './ClassList.css';


function RaceList() {
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
  }, []);

  function addClass() {
    event.preventDefault();
      dispatch({type: "CLASS_TO_ADD", payload: newList })
  }

  return (
    <div>
    <h1>backgrounds</h1>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      {classes.map((charClass) => (
        <tr key={charClass.id}>
          <td>{charClass.name}</td>
          <td>
            <button onClick={addClass}>Select</button>
          </td>
        </tr>
      ))}
    </table>
  </div>
  );
}
export default RaceList;
