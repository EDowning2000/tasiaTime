import React, { useState, useContext } from "react";
import { GlobalState } from "../Components/GlobalState";
import styles from "../styles/Hole.module.css";
import Button from "../Components/button";
import Input from "../Components/input";

export default function One() {
  const {
    playerCount,

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

  const updateOneScore = () => {};
  const updateTwoScore = () => {};
  const updateThreeScore = () => {};
  const updateFourScore = () => {};
  const updateFiveScore = () => {};

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
              <>
                <h1 className={styles.holeHeader}>Hole 1</h1>
                <div className={styles.holeInfoContainer}>
                  {playerCount == 1 && (
                    <>
                      <Input
                        inputType="number"
                        playerNumber={playerOne}
                        playerOnChange={updateOneScore}
                      />
                    </>
                  )}
                  {playerCount == 2 && (
                    <>
                      <Input
                        inputType="number"
                        playerNumber={playerOne}
                        playerOnChange={updateOneScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerTwo}
                        playerOnChange={updateTwoScore}
                      />
                    </>
                  )}
                  {playerCount == 3 && (
                    <>
                      <Input
                        inputType="number"
                        playerNumber={playerOne}
                        playerOnChange={updateOneScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerTwo}
                        playerOnChange={updateTwoScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerThree}
                        playerOnChange={updateThreeScore}
                      />
                    </>
                  )}
                  {playerCount == 4 && (
                    <>
                      <Input
                        inputType="number"
                        playerNumber={playerOne}
                        playerOnChange={updateOneScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerTwo}
                        playerOnChange={updateTwoScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerThree}
                        playerOnChange={updateThreeScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerFour}
                        playerOnChange={updateFourScore}
                      />
                    </>
                  )}
                  {playerCount == 5 && (
                    <>
                      <Input
                        inputType="number"
                        playerNumber={playerOne}
                        playerOnChange={updateOneScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerTwo}
                        playerOnChange={updateTwoScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerThree}
                        playerOnChange={updateThreeScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerFour}
                        playerOnChange={updatePlayerFourScore}
                      />
                      <Input
                        inputType="number"
                        playerNumber={playerFive}
                        playerOnChange={updateFiveScore}
                      />
                    </>
                  )}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button text={"Hole 1"} routePrevious="/add" routeNext={"/two"} />
      </div>
    </>
  );
}
