import React, { useState } from "react";
import styles from "../styles/Add.module.css";
import ButtonNav from "../Components/button";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Add() {
  const [course, setCourse] = useState("");
  const [players, setPlayers] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickCourses = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickPlayers = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeFairways = () => {
    setCourse("Fairways");
    handleClose();
  };

  const closeGardens = () => {
    setCourse("Gardens");
    handleClose();
  };

  const closeOne = () => {
    setPlayers(1);
    handleClose();
  };
  const closeTwo = () => {
    setPlayers(2);
    handleClose();
  };
  const closeThree = () => {
    setPlayers(3);
    handleClose();
  };
  const closeFour = () => {
    setPlayers(4);
    handleClose();
  };
  const closeFive = () => {
    setPlayers(5);
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
              {course == "" && (
                <>
                  <h3 className={styles.coursePickerHeader}>
                    WHICH COURSE ARE YOU PLAYING
                  </h3>
                  <div className={styles.courseDropdownContainer}>
                    <Button
                      className={styles.courseDropdown}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClickCourses}
                    >
                      Choose A Course
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={closeFairways}>The Fairways</MenuItem>
                      <MenuItem onClick={closeGardens}>The Gardens</MenuItem>
                    </Menu>
                  </div>{" "}
                </>
              )}{" "}
              {course !== "" && (
                <>
                  <h3 className={styles.playerCountHeader}>HOW MANY PLAYERS</h3>
                  <div className={styles.playerDropdownContainer}>
                    <Button
                      className={styles.playerDropdown}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClickPlayers}
                    >
                      Choose A Course
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={closeOne}>1 Player</MenuItem>
                      <MenuItem onClick={closeTwo}>2 Players</MenuItem>
                      <MenuItem onClick={closeThree}>3 Players</MenuItem>
                      <MenuItem onClick={closeFour}>4 Players</MenuItem>
                      <MenuItem onClick={closeFive}>5 Players</MenuItem>
                    </Menu>
                  </div>
                </>
              )}
              {/* need to conditonally render the player names now */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonNav
          routePrevious="/"
          routeNext="/rules"
          text="Course Descriptions"
        />
      </div>
    </>
  );
}
