import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './BackgroundsList.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function BackgroundsList() {
  const [backgrounds, setBackgrounds] = useState([]);

  const fetchBackGrounds = () => {
    console.log('in fetchbackgrounds function');

    axios
      .get('/api/backgrounds')
      .then((response) => {
        console.log('RESPONSE:', response.data);
        setBackgrounds(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBackGrounds();
  }, []);

  return (
    <div>
      <h1>backgrounds</h1>
      <div className="table-container">
        <Paper elevation={14}>
          <TableContainer className="table-style">
            <Table className="table-style">
              <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
              <TableBody>
              {backgrounds.map((background) => (
                  <TableRow key={background.id}>
                    <TableCell>{background.name}</TableCell>
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
export default BackgroundsList;
