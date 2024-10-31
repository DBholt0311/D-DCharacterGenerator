import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

import CharList from "../CharList/CharList";

function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <CharList />
    </div>
  );
}

export default UserPage;
