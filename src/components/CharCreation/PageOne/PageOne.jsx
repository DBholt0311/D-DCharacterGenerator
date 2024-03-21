import React from "react";
import { Link } from 'react-router-dom';

import Class from "../Class/Class";
import Race from "../Race/Race";
import Background from "../Background/Background";

function PageOne() {
    return (
        <div>
            <Class/>
            <Race/>
            <Background/>
            <Link to="/PageTwo">Next</Link>
        </div>
    )
}

export default PageOne;