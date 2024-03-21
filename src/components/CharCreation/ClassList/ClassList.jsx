import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ClassList.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

  return (
    <div>
      <h1>Classes</h1>
      <div className="table-container">
        <Paper elevation={14}>
          <TableContainer className="table-style">
            <Table className="table-style">
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
              <TableBody>
              {classes.map((charClass) => (
                  <TableRow key={charClass.id}>
                    <TableCell>{charClass.name}</TableCell>
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
