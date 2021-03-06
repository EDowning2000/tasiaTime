import React, { useState, useContext } from "react";
import { GlobalState } from "../Components/GlobalState";
import styles from "../styles/Add.module.css";
import ButtonNav from "../Components/button";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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

  const [renderCourse, setRenderCourse] = useState("true");
  const [renderPlayers, setRenderPlayers] = useState("false");
  const [renderPlayersInput, setRenderPlayersInput] = useState("false");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  //these functions help with conditional rendering too
  const closeFairways = () => {
    setSelectedCourse("fairways");
    setRenderCourse("false");
    setRenderPlayers("true");
    handleClose();
  };

  const closeGardens = () => {
    setSelectedCourse("gardens");
    setRenderCourse("false");
    setRenderPlayers("true");
    handleClose();
  };

  //these functions set how many inputs to render and what not to render
  const closeOne = () => {
    setPlayerCount(1);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeTwo = () => {
    setPlayerCount(2);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeThree = () => {
    setPlayerCount(3);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeFour = () => {
    setPlayerCount(4);
    setRenderPlayers("false");
    setRenderPlayersInput("true");
    handleClose();
  };
  const closeFive = () => {
    setPlayerCount(5);
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
                  {playerCount == 1 && (
                    <>
                      <Input
                        inputType="text"
                        playerNumber="Player One"
                        playerOnChange={e => setPlayerOne(e.target.value)}
                      />
                    </>
                  )}
                  {playerCount == 2 && (
                    <>
                      <Input
                        inputType="text"
                        playerNumber="Player One"
                        playerOnChange={e => setPlayerOne(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Two"
                        playerOnChange={e => setPlayerTwo(e.target.value)}
                      />
                    </>
                  )}
                  {playerCount == 3 && (
                    <>
                      <Input
                        inputType="text"
                        playerNumber="Player One"
                        playerOnChange={e => setPlayerOne(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Two"
                        playerOnChange={e => setPlayerTwo(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Three"
                        playerOnChange={e => setPlayerThree(e.target.value)}
                      />
                    </>
                  )}
                  {playerCount == 4 && (
                    <>
                      <Input
                        inputType="text"
                        playerNumber="Player One"
                        playerOnChange={e => setPlayerOne(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Two"
                        playerOnChange={e => setPlayerTwo(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Three"
                        playerOnChange={e => setPlayerThree(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Four"
                        playerOnChange={e => setPlayerFour(e.target.value)}
                      />
                    </>
                  )}
                  {playerCount == 5 && (
                    <>
                      <Input
                        inputType="text"
                        playerNumber="Player One"
                        playerOnChange={e => setPlayerOne(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Two"
                        playerOnChange={e => setPlayerTwo(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Three"
                        playerOnChange={e => setPlayerThree(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Four"
                        playerOnChange={e => setPlayerFour(e.target.value)}
                      />
                      <Input
                        inputType="text"
                        playerNumber="Player Five"
                        playerOnChange={e => setPlayerFive(e.target.value)}
                      />
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
            routePrevious="/rules"
            routeNext="/one"
            text="Course Descriptions"
          />
        </div>
      )}
    </>
  );
}
