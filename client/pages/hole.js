import React, { useState, useContext } from "react";
import { InfoContext } from "../Components/InfoContext";

function hole() {
  const value = useContext(InfoContext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default hole;
