import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ClassList from "../ClassList/ClassList";
import RaceList from "../RaceList/RaceList";
import BackgroundList from "../BackgroundList/BackgroundList";

function PageOne() {

    return (
        <div>
            <ClassList/>
            <RaceList/>
            <BackgroundList/>
            <Link to="/PageTwo">Next</Link>
        </div>
    )
}

export default PageOne;