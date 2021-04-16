import React, { useState } from "react";
import styles from "../styles/Add.module.css";
import ButtonNav from "../Components/button";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Add() {
  const [fairways, setFairways] = useState(false);
  const [gardens, setGardens] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeFairways = () => {
    setFairways(true);
    handleClose();
  };

  const closeGardens = () => {
    setGardens(true);
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
              <h3 className={styles.coursePickerHeader}>
                WHICH COURSE ARE YOU PLAYING
              </h3>

              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
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
              <h3 className={styles.playerCountHeader}>HOW MANY PLAYERS</h3>
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
