import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ClassDisplay() {

  const displayClass = useSelector((store) => store.charClass);
  let chosenClass = {};
  const fetchClass = () => {
    console.log("display", displayClass);

    axios
      .get(`/api/classes/${displayClass}`, displayClass)
      .then((response) => {
        console.log("RESPONSE:", response.data);
        chosenClass = {
            displayName: response.data[0].name,
            hd: response.data[0].hit_die,
            desc: response.data[0].description,
            portrait: response.data[0].portrait_url,
        };
        console.log(`CLASS:   `,chosenClass);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchClass({});
  }, []);

  return (
    <div>
      <h2>{chosenClass.name}</h2>
    </div>
  );
}

export default ClassDisplay;
