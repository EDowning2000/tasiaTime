import React, { useState, useContext } from "react";
import { GlobalState } from "../Components/GlobalState";

function hole() {
  const {
    selectedCourse,
    setSelectedCourse,
    playerCount,
    setPlayerCount,
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    playerThree,
    setPlayerThree,
    playerFour,
    setPlayerFour,
    playerFive,
    setPlayerFive,
    playerOneScores,
    playerTwoScores,
    playerThreeScores,
    playerFourScores,
    playerFiveScores,
    playerOneTotal,
    playerTwoTotal,
    playerThreeTotal,
    playerFourTotal,
    playerFiveTotal,
  } = useContext(GlobalState);
  return (
    <div>
      <h1>
        {selectedCourse}
        {playerOne}
        {playerTwo}
        {playerThree}
        {playerFour}
        {playerFive}
      </h1>
    </div>
  );
}

export default hole;
