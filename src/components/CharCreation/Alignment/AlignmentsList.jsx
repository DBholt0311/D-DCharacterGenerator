import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AlignmentsList() {
  const dispatch = useDispatch();
  const [alignments, setAlignments] = useState([]);
  const [chosenAlignment, setChosenAlignment] = useState('');

  const fetchAlignments = () => {
    console.log("in fetchAlignments function");

    axios
      .get("/api/alignments")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setAlignments(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchAlignments();
    setChosenAlignment('');
  }, []);

  const handleAlignmentSelect = (event) => {
    const alignment = event.target.value;
    setChosenAlignment(alignment);
    dispatch({type: "ALIGNMENT_TO_ADD", payload: alignment });
  }

  return (
    <div>
    <h1>Alignments</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {alignments.map((alignment) => (
        <tr key={alignment.id}>
          <td><button value={alignment.name} onClick={handleAlignmentSelect}>{alignment.name}</button></td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
  );
}
export default AlignmentsList;
