import React, { useState, useContext } from "react";
import styles from "../styles/Hole.module.css";
import { GlobalState } from "../Components/GlobalState";
import Input from "../Components/input";
import Button from "../Components/button";

function Hole() {
  const {
    selectedCourse,
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
  let holeNumber = 1;
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.lightGreen}></div>
          <div className={styles.darkGreen}></div>
          <div className={styles.center}>
            <div className={styles.center2}>
              <h1>{holeNumber}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          text={"Hole" + holeNumber}
          routeNext="/courses"
          routePrevious="/add"
        />
      </div>
    </>
  );
}

export default Hole;
