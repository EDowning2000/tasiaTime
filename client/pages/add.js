import React, { useState } from "react";
import styles from "../styles/Add.module.css";
import ButtonNav from "../Components/button";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Add() {
  const [course, setCourse] = useState("");
  const [players, setPlayers] = useState();
  let playerNames = [];

  const [renderCourse, setRenderCourse] = useState("true");
  const [renderPlayers, setRenderPlayers] = useState("false");
  const [renderPlayersInput, setRenderPlayersInput] = useState("false");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeFairways = () => {
    setCourse("Fairways");
    setRenderCourse("false");
    setRenderPlayers("true");
    handleClose();
  };

  const closeGardens = () => {
    setCourse("Gardens");
    setRenderCourse("false");
    setRenderPlayers("true");
    handleClose();
  };

  const closeOne = () => {
    setPlayers(1);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeTwo = () => {
    setPlayers(2);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeThree = () => {
    setPlayers(3);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeFour = () => {
    setPlayers(3);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeFive = () => {
    setPlayers(5);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
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
              {renderCourse == "true" && (
                <>
                  <h3 className={styles.coursePickerHeader}>
                    WHICH COURSE ARE YOU PLAYING
                  </h3>
                  <div className={styles.courseDropdownContainer}>
                    <Button
                      className={styles.courseDropdown}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      Choose A Course
                    </Button>
                    <Menu
                      className={styles.menu}
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem
                        className={styles.menuItem}
                        onClick={closeFairways}
                      >
                        The Fairways
                      </MenuItem>
                      <MenuItem
                        className={styles.menuItem}
                        onClick={closeGardens}
                      >
                        The Gardens
                      </MenuItem>
                    </Menu>
                  </div>{" "}
                </>
              )}{" "}
              {renderPlayers == "true" && (
                <>
                  <h3 className={styles.playerCountHeader}>HOW MANY PLAYERS</h3>
                  <div className={styles.playerDropdownContainer}>
                    <Button
                      className={styles.playerDropdown}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      Choose Player Count
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem className={styles.menuItem} onClick={closeOne}>
                        1 Player
                      </MenuItem>
                      <MenuItem className={styles.menuItem} onClick={closeTwo}>
                        2 Players
                      </MenuItem>
                      <MenuItem
                        className={styles.menuItem}
                        onClick={closeThree}
                      >
                        3 Players
                      </MenuItem>
                      <MenuItem className={styles.menuItem} onClick={closeFour}>
                        4 Players
                      </MenuItem>
                      <MenuItem className={styles.menuItem} onClick={closeFive}>
                        5 Players
                      </MenuItem>
                    </Menu>
                  </div>
                </>
              )}
              {renderPlayersInput == "true" && (
                <>
                  <h3 className={styles.playerInputHeader}>
                    WHAT ARE THE PLAYERS NAMES
                  </h3>
                  {/* essentially rendering the correct amount of inputs based on your player count */}
                  {players == 1 && (
                    <>
                      <h1>1</h1>
                    </>
                  )}
                  {players == 2 && (
                    <>
                      <h1>2</h1>
                    </>
                  )}
                  {players == 3 && (
                    <>
                      <h1>3</h1>
                    </>
                  )}
                  {players == 4 && (
                    <>
                      <h1>4</h1>
                    </>
                  )}
                  {players == 5 && (
                    <>
                      <h1>5</h1>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {renderPlayersInput == "true" && (
        <div className={styles.buttonContainer}>
          <ButtonNav
            routePrevious="/"
            routeNext="/rules"
            text="Course Descriptions"
          />
        </div>
      )}
    </>
  );
}
