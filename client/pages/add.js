import styles from "../styles/Add.module.css";
import Button from "../Components/button";

export default function Add() {
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
              <h3 className={styles.playerCountHeader}>HOW MANY PLAYERS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          routePrevious="/"
          routeNext="/rules"
          text="Course Descriptions"
        />
      </div>
    </>
  );
}
