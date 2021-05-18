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
    setPlayerOneScores,
    playerOneScores,
    setPlayerTwoScores,
    playerTwoScores,
    setPlayerThreeScores,
    playerThreeScores,
    setPlayerFourScores,
    playerFourScores,
    setPlayerFiveScores,
    playerFiveScores,
  } = useContext(GlobalState);

  const updateOneScore = e => {
    // playerOneScores[0] = e.target.value;
    setPlayerOneScores(playerOneScores.push(e.target.value));
    console.log(playerOneScores);
  };
  const updateTwoScore = e => {
    setPlayerTwoScores(...(playerTwoScores + e.target.value));
  };
  const updateThreeScore = e => {
    setPlayerThreeScores(...(playerThreeScores + e.target.value));
  };
  const updateFourScore = e => {
    setPlayerFourScores(...(playerFourScores + e.target.value));
  };
  const updateFiveScore = e => {
    setPlayerFiveScores(...(playerFiveScores + e.target.value));
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
                        playerOnChange={updateFourScore}
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
