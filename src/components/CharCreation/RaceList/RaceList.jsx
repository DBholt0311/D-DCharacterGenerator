import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './RaceList.css';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function RaceList() {
  const [races, setRaces] = useState([]);

  const fetchRaces = () => {
    console.log('in fetchRaces function');

    axios
      .get('/api/races')
      .then((response) => {
        console.log('RESPONSE:', response.data);
        setRaces(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchRaces();
  }, []);

  return (
    <div>
      <h1>Races</h1>
      <div className="table-container">
        <Paper elevation={14}>
          <TableContainer className="table-style">
            <Table className="table-style">
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
              <TableBody>
                {races.map((race) => (
                  <TableRow key={race.id}>
                    <TableCell>{race.name}</TableCell>
                    <TableCell><button>Select</button></TableCell>
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
export default RaceList;
