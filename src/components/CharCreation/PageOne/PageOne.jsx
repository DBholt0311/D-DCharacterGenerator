import React from "react";
import { Link } from 'react-router-dom';

import Class from "../Class/Class";
import RaceList from "../RaceList/RaceList";
import Background from "../Background/Background";

function PageOne() {
    return (
        <div>
            <Class/>
            <RaceList/>
            <Background/>
            <Link to="/PageTwo">Next</Link>
        </div>
    )
}

export default PageOne;