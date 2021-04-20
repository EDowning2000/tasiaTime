import React, { useState, createContext } from "react";

export const InfoContext = createContext();
export const InfoProvider = props => {
  return (
    <InfoContext.Provider value="this actually works right now">
      {props.children}
    </InfoContext.Provider>
  );
};
