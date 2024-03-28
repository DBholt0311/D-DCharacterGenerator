import React from "react";
import { Link } from "react-router-dom";
import AlignmentsList from "../Alignment/AlignmentsList";

import Name from "../Name/Name";

import BackgroundsList from "../BackgroundList/BackgroundList"

function PgOne() {
    return (
        <div>
            <Name />
            <AlignmentsList />
            <BackgroundsList />
            <button><Link to="/race">Next</Link></button>
        </div>
    )
}

export default PgOne;