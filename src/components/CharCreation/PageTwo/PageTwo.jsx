import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AbilityScores from "../AbilityScores/AbilityScores";


function PageTwo() {
    let currentClass = useSelector((store) => store.charClass);
    let currentRace = useSelector((store) => store.race);
    let currentBackground = useSelector((store) => store.background);

    return (
        <div>
            <h4>Char info</h4>
            <p>Name: {currentClass} Race: {currentRace} Background: {currentBackground}</p>
            <AbilityScores/>
            <Link to="/CharConfirmation">Next</Link>
        </div>
    )
}

export default PageTwo;