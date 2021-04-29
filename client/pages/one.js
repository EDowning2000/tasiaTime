import React, { useState, useContext } from "react";
import { GlobalState } from "../Components/GlobalState";
import styles from "../styles/Hole.module.css";
import Button from "../Components/button";
import Input from "../Components/input";

export default function Add() {
  const {
    setSelectedCourse,
    playerCount,
    setPlayerCount,
    setPlayerOne,
    setPlayerTwo,
    setPlayerThree,
    setPlayerFour,
    setPlayerFive,
  } = useContext(GlobalState);

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
                      <Input />
                    </>
                  )}
                  {playerCount == 2 && (
                    <>
                      <Input />
                      <Input />
                    </>
                  )}
                  {playerCount == 3 && (
                    <>
                      <Input />
                      <Input />
                      <Input />
                    </>
                  )}
                  {playerCount == 4 && (
                    <>
                      <Input />
                      <Input />
                      <Input />
                      <Input />
                    </>
                  )}
                  {playerCount == 5 && (
                    <>
                      <Input />
                      <Input />
                      <Input />
                      <Input />
                      <Input />
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

{
  /* <Button text={"Hole 1"} routePrevious="/add" routeNext={"/two"} />

{playerCount == 1 && (
  <>
    <Input />
  </>
)}
{playerCount == 2 && (
  <>
    <Input />
    <Input />
  </>
)}
{playerCount == 3 && (
  <>
    <Input />
    <Input />
    <Input />
  </>
)}
{playerCount == 4 && (
  <>
    <Input />
    <Input />
    <Input />
    <Input />
  </>
)}
{playerCount == 5 && (
  <>
    <Input />
    <Input />
    <Input />
    <Input />
    <Input />
  </>
)} */
}
