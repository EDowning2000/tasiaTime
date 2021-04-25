import React, { useState, useContext } from "react";
import styles from "../styles/Hole.module.css";
import { GlobalState } from "../Components/GlobalState";
import Input from "../Components/input";
import Button from "../Components/button";
import HoleSelectorButton from "../Components/holeSelectorButton";

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

  const holeSelector = () => {
    if (holeNumber < 18) {
      holeNumber++;
    }
  };

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
              <h1>Hole Number {holeNumber}</h1>
              {/* inputs go here */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {holeNumber < 18 && (
          <>
            <HoleSelectorButton
              text={"Hole " + holeNumber}
              holeSelectorForward={"/" + selectedCourse}
              holeSelectorBack="/add"
            />
          </>
        )}
        {holeNumber == 18 && (
          <>
            <Button
              text={"Hole " + holeNumber}
              routePrevious="/add"
              routeNext={"/" + selectedCourse}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Hole;
