import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./BackgroundsList.css";

function BackgroundsList() {
  const [backgrounds, setBackgrounds] = useState([]);

  const fetchBackGrounds = () => {
    console.log("in fetchBackgrounds function");

    axios
      .get("/api/backgrounds")
      .then((response) => {
        console.log("RESPONSE:", response.data);
        setBackgrounds(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBackGrounds();
  }, []);

  const handleAddBackground() {
    
  }

  return (
    <div>
      <h1>backgrounds</h1>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        {backgrounds.map((background) => (
          <tr key={background.id}>
            <td>{background.name}</td>
            <td>
              <button>Select</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default BackgroundsList;
