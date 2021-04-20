import React, { useState, createContext } from "react";

export const InfoContext = createContext();
export const InfoProvider = props => {
  //the course that the user selects
  const [selectedCourse, setSelectedCourse] = useState("");

  //variables to set the players names
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerThree, setPlayerThree] = useState("");
  const [playerFour, setPlayerFour] = useState("");
  const [playerFive, setPlayerFive] = useState("");

  //gonna use array methods to pop and enque on these to map into the scorecards
  const playerOneScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerTwoScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerThreeScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerFourScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerFiveScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  //variables to count the player total scores
  const playerOneTotal = 0;
  const playerTwoTotal = 0;
  const playerThreeTotal = 0;
  const playerFourTotal = 0;
  const playerFiveTotal = 0;
  return (
    <InfoContext.Provider value="this actually works right now">
      {props.children}
    </InfoContext.Provider>
  );
};
