import React from "react";
import { Link } from "react-router-dom";

import Name from "../Name/Name";
import Alignment from "../Alignment/Alignment";
import BackgroundsList from "../BackgroundList/BackgroundList"

function PgOne() {
    return (
        <div>
            <Name />
            <Alignment />
            <BackgroundsList />
            <button><Link to="/race">Next</Link></button>
        </div>
    )
}

export default PgOne;