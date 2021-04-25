import React, { useState, useContext } from "react";
import styles from "../styles/Hole.module.css";
import { GlobalState } from "../Components/GlobalState";
import Input from "../Components/input";
import Button from "../Components/buton";

function Hole() {
  const {
    playerOne,
    playerTwo,
    playerThree,
    playerFour,
    playerFive,
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
    <div className={styles.mainContainer}>
      <h1></h1>
    </div>
  );
}

export default Hole;
