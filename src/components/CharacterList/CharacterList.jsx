import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './CharacterList.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    console.log('in fetchOrders function');

    axios
      .get('/api/characters')
      .then((response) => {
        console.log('RESPONSE:', response.data);
        setCharacters(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <div className="table-container">
        <Paper elevation={14}>
          <TableContainer className="table-style">
            <Table className="table-style">
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Race</TableCell>
                <TableCell>Class</TableCell>
              </TableRow>
              <TableBody>
                {characters.map((character) => (
                  <TableRow key={character.id}>
                    <TableCell>{character.level}</TableCell>
                    <TableCell>{character.character_name}</TableCell>
                    <TableCell>{character.race}</TableCell>
                    <TableCell>{character.class}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}
export default CharacterList;
