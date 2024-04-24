import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import "./CharList.css";

function CharList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const user = useSelector((store) => store.user);

  const fetchCharacters = () => {
    axios
      .get("/api/characters")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setCharacters(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchCharacters([]);
  }, []);

  const selectChar = (event) => {
    let id = event.target.value;
    dispatch({ type: "CHAR_ID", payload: id });
  };

  const deleteChar = (event) => {
    let id = event.target.value;

    axios
      .delete(`/api/characters/${id}`, id)
      .then((response) => {
        console.log("RESPONSE:", response.data);
        fetchCharacters();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const createNewChar = () => {
    dispatch({ type: "CREATE_CHAR", payload: {
      name: '',
      charClass: '',
      background: '',
      alignment: '',
      exp: 0,
      lvl: 1,
      race: '',
      hp: 0,
      str: 0,
      dex: 0,
      con: 0,
      wis: 0,
      int: 0,
      cha: 0,
      user: user.id,
    }})
    history.push('/races');
  };

  return (
    <div>
      <h1 className="title">Choose Your Hero</h1>
      <TableContainer className="charList" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Race</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((char) => (
              <TableRow
                key={char.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {char.name}
                </TableCell>
                <TableCell align="right">{char.level}</TableCell>
                <TableCell align="right">{char.character_name}</TableCell>
                <TableCell align="right">{char.race}</TableCell>
                <TableCell align="right">
                  <Link to="/charSheet">
                    <Button
                      size="small"
                      variant="text"
                      value={char.id}
                      onClick={selectChar}
                    >
                      Select
                    </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="text"
                    value={char.id}
                    onClick={deleteChar}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
      size="small"
      variant="contained"
      onClick={createNewChar}
      >
        Create Character
      </Button>
    </div>
  );
}
export default CharList;
