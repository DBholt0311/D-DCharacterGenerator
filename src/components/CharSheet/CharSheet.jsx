import React from "react";

function CharSheet() {
    const createNewChar = () => {
        axios
        .post("/api/characters", newChar)
        .then((response) => {
          console.log('response:', response.data)
    
        })}

    return (
    <p>char sheet</p>
    )
}

export default CharSheet;